import { html } from 'lit';
import { localize } from '../../utils/localize';
import { formatDuration, formatEndTime } from '../../utils/formatters';

export const headerTemplate = (entities, controls) => html`
  <div class="header">
    <div>
      <div class="printer-name">${entities.name}</div>
      <div class="status">
        ${localize.localize(`entity.sensor.state.${entities.status}`)}
        ${entities.isPrinting ? html`
          <span class="progress-text">
            ${Math.round(entities.progress)}% | 
            ${localize.t('print.layer')}: ${entities.currentLayer}/${entities.totalLayers}
          </span>
        ` : ''}
      </div>
      ${entities.isPrinting ? html`
        <div class="progress-bar">
          <div class="progress-fill" style="width: ${entities.progress}%"></div>
        </div>
        <div class="layer-info">
          ${localize.t('time.left')}: ${formatDuration(entities.remainingTime)}, 
          ${formatEndTime(entities.remainingTime, controls.hass)}
        </div>
      ` : ''}
    </div>
    <div class="header-controls">
      <button 
        class="icon-button ${controls.lightState === 'on' ? 'active' : ''}" 
        @click=${controls.onLightToggle}
      >
        <ha-icon icon="mdi:lightbulb"></ha-icon>
      </button>
      ${controls.hasFan ? html`
        <button 
          class="icon-button ${controls.fanState === 'on' ? 'active' : ''}"
          @click=${controls.onFanToggle}
        >
          <ha-icon icon="mdi:fan"></ha-icon>
        </button>
      ` : ''}
    </div>
  </div>
`;