/**
 * Format remaining time duration into human readable format
 * @param {number} minutes - Duration in minutes
 * @param {object} options - Formatting options
 * @returns {string} Formatted duration string
 */
export const formatDuration = (minutes, options = {}) => {
  const {
    showComplete = true,
    completeText = 'Complete'
  } = options;

  if (!minutes || minutes <= 0) {
    return showComplete ? completeText : '0m';
  }

  const hours = Math.floor(minutes / 60);
  const mins = Math.floor(minutes % 60);

  if (hours > 0) {
    return `${hours}h ${mins}m`;
  }
  return `${mins}m`;
};

/**
 * Calculate and format the end time based on remaining minutes
 * @param {number} remainingMinutes - Remaining time in minutes
 * @param {object} hass - Home Assistant instance
 * @returns {string} Formatted end time
 */
export const formatEndTime = (remainingMinutes, hass) => {
  if (!remainingMinutes || remainingMinutes <= 0 || !hass) {
    return '---';
  }

  try {
    const now = new Date();
    const endTime = new Date(Date.now() + (remainingMinutes * 60000));
    // Determine whether to use 12h (AM/PM) or 24h clock
    const timeFormatPref = hass?.locale?.time_format; // '12' | '24' | 'system' | undefined
    let useHour12;
    if (timeFormatPref === '24') {
      useHour12 = false;
    } else if (timeFormatPref === '12') {
      useHour12 = true;
    } else {
      // Fallback to detecting from the locale using Intl
      try {
        const parts = new Intl.DateTimeFormat(hass.locale.language, { hour: 'numeric' }).formatToParts(new Date());
        useHour12 = parts.some(p => p.type === 'dayPeriod');
      } catch {
        useHour12 = false; // sensible default to 24h if detection fails
      }
    }

    const timeFormat = {
      hour: useHour12 ? 'numeric' : '2-digit',
      minute: '2-digit',
      hour12: useHour12
    };

    const formatted = new Intl.DateTimeFormat(hass.locale.language, timeFormat)
      .format(endTime)
      .toLowerCase()
      .replace(/\s/g, '');

    // Calculate calendar day difference and append +N if it ends on a later day
    const startOfToday = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const startOfEndDay = new Date(endTime.getFullYear(), endTime.getMonth(), endTime.getDate());
    const dayDiff = Math.round((startOfEndDay - startOfToday) / 86400000);

    return `${formatted}${dayDiff > 0 ? ` +${dayDiff}` : ''}`;
  } catch (error) {
    console.warn('Error formatting end time:', error);
    return '---';
  }
};

/**
 * Format a temperature value with unit
 * @param {number|string} value - Temperature value
 * @param {string} unit - Temperature unit
 * @returns {string} Formatted temperature
 */
export const formatTemperature = (value, unit) => {
  const temp = parseFloat(value);
  if (isNaN(temp)) return '---';
  return `${temp.toFixed(0)}${unit}`;
};