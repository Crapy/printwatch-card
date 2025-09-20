// src/styles/card-styles.js
import { css } from 'lit';

export const cardStyles = css`
  /* Print preview */
  .preview-image {
    flex-shrink: 0;
    width: 100px;
    border-radius: 8px;
    overflow: hidden;
    margin: 0 8px;
    background: var(--secondary-background-color);
    align-self: stretch;
  }

  /* Container query: when the card itself is narrow (desktop small columns),
     stack and stretch header content so the progress bar extends nicely. */
  @container (max-width: 600px) {
    .print-status-header-wrapper {
      flex-direction: column;
      gap: 8px;
    }

    .print-status,
    .header {
      width: 100%;
      min-width: 0;
    }

    .header {
      flex-shrink: 1;
      align-items: stretch;
    }

    .header-controls {
      flex-wrap: wrap;
      justify-content: center;
      gap: 8px;
    }

    /* Moderate scaling when card (and thus camera feed) is narrow */
    .header { font-size: 14px; padding: 3px 6px; }
    .status { font-size: 14px; }
    .progress-text, .layer-info { font-size: 12px; }
    .progress-bar { height: 3px; margin: 2px 0; }
    .header-controls .icon-button { padding: 6px; }
    .header-controls .icon-button ha-icon { width: 20px; height: 20px; }

    .print-preview { gap: 6px; }
    .preview-image { width: 88px; }
    .print-details h3 { font-size: 15px; }
    .print-details .print-stats { font-size: 13px; }
    .btn { padding: 6px 16px; font-size: 15px; }

    .temperatures { font-size: 12px; padding: 3px 6px; }
    .temp-item { padding: 3px 10px; font-size: 11px; }
    .temp-value { font-size: 12px; }
    .camera-label { font-size: 12px; padding: 2px 6px; }
    .camera-light-toggle { width: 30px; height: 30px; }
    .camera-light-toggle ha-icon { --mdc-icon-size: 20px; width: 20px; height: 20px; }
  }

  /* Stronger scaling when the card is very narrow */
  @container (max-width: 420px) {
    .header { font-size: 13px; padding: 2px 6px; }
    .status { font-size: 13px; }
    .progress-text, .layer-info { font-size: 11px; }
    .progress-bar { height: 3px; margin: 2px 0; }
    .header-controls .icon-button { padding: 4px; }
    .header-controls .icon-button ha-icon { width: 18px; height: 18px; }

    .print-preview { gap: 6px; }
    .preview-image { width: 72px; }
    .print-details h3 { font-size: 14px; }
    .print-details .print-stats { font-size: 12px; }
    .btn { padding: 6px 12px; font-size: 14px; }

    .temperatures { font-size: 11px; padding: 2px 4px; }
    .temp-item { padding: 2px 8px; font-size: 10px; }
    .temp-value { font-size: 11px; }
    .camera-label { font-size: 12px; padding: 2px 6px; }
    .camera-light-toggle { width: 28px; height: 28px; }
    .camera-light-toggle ha-icon { --mdc-icon-size: 20px; width: 20px; height: 20px; }
  }

  .preview-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .print-preview {
    display: flex;
    gap: 8px;
    align-items: stretch;
    min-height: 100px;
  }

  .print-details {
    flex-grow: 1;
    padding: 0 8px;
  }

  .print-details h3 {
    margin: 0 0 4px 0;
    font-size: 16px;
    color: var(--primary-text-color);
    white-space: normal;
    overflow-wrap: break-word;
    word-wrap: break-word;
    line-height: 1.4;
  }

  .print-details .print-stats {
    margin: 0 0 8px 0;
    font-size: 14px;
    color: var(--secondary-text-color);
  }

  /* Card Layout */
  .card {
    background: var(--ha-card-background, var(--card-background-color));
    border-radius: var(--ha-card-border-radius, 12px);
    padding: 16px;
    font-family: var(--primary-font-family, -apple-system, BlinkMacSystemFont, sans-serif);
    position: relative;
    overflow: hidden;
    /* Enable container queries so layout can respond to card width, not viewport */
    container-type: inline-size;
  }

  .print-status-header-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: stretch; /* Changed from flex-start to stretch */
    margin-bottom: 16px; /* Moved from .print-status */
    gap: 16px; /* Spacing between print status and header */
    flex-wrap: wrap; /* Allow wrapping on small screens to prevent overflow */
  }

  .header {
    color: var(--secondary-text-color);
    padding: 4px 8px;
    border-radius: 8px;
    font-size: 16px;
    background: var(--ha-card-background);
    text-transform: capitalize;
    opacity: 0.7; /* Made more transparent */
    flex-shrink: 0; /* Prevent shrinking */
    display: flex;
    flex-direction: column;
    justify-content: space-between; /* Pushes status to top, controls to bottom */
    align-items: center; /* Centers controls horizontally */
  }

  /* Ensure the content column inside header stretches to full width so progress bar can fill */
  .header > div:first-child {
    width: 100%;
    min-width: 0;
    box-sizing: border-box;
  }

  .printer-name {
    font-size: 24px;
    font-weight: 500;
    color: var(--primary-text-color);
  }

  .status {
    color: var(--state-active-color);
    font-size: 16px;
    font-weight: 500;
    text-transform: capitalize;
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .progress-text {
    color: var(--secondary-text-color);
    font-size: 14px;
    font-weight: 400;
    opacity: 0.9;
  }

  .header-controls {
    display: flex;
    gap: 12px;
    align-items: center;
  }

  /* Control Buttons */
  .icon-button {
    background: none;
    border: none;
    padding: 8px;
    border-radius: 50%;
    cursor: pointer;
    color: var(--secondary-text-color);
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.2s ease;
  }

  .icon-button:hover {
    background: var(--secondary-background-color);
  }

  .icon-button.active {
    color: var(--state-active-color);
  }

  .icon-button ha-icon {
    width: 24px;
    height: 24px;
  }

  /* Camera Feed */
  .camera-and-temps-wrapper {
    position: relative;
    margin-bottom: 16px; /* Maintains spacing, moved from .camera-feed */
    /* Make this a container so overlay and light toggle scale with camera width */
    container-type: inline-size;
    container-name: camera;
  }

  .camera-feed {
    width: 100%;
    aspect-ratio: 16 / 9;
    border-radius: 8px;
    /* margin-bottom: 16px; REMOVED - Handled by wrapper */
    position: relative; /* Keep for internal elements like camera-label if needed */
    background: var(--secondary-background-color);
    overflow: hidden;
  }

  .offline-message {
    width: 100%;
    aspect-ratio: 16 / 9;
    border-radius: 8px;
    margin-bottom: 16px;
    background: var(--secondary-background-color);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: var(--secondary-text-color);
    gap: 8px;
  }

  .camera-label {
    position: absolute;
    top: 4px;
    left: 4px;
    color: var(--secondary-text-color);
    padding: 4px 8px;
    border-radius: 8px;
    font-size: 16px;
    background-color: color-mix(in srgb, var(--card-background-color) 80%, transparent);
    text-transform: capitalize;
    opacity: 0.9;
  }

  /* Camera light toggle overlay */
  .camera-light-toggle {
    position: absolute;
    top: 4px;
    right: 4px;
    border: none;
    border-radius: 50%;
    width: 36px; /* Use 24px icon with 6px inset each side */
    height: 36px;
    padding: 0; /* Fixed-size circle to ensure perfect centering */
    box-sizing: border-box;
    line-height: 0; /* Avoid extra inline spacing */
    cursor: pointer;
    color: var(--secondary-text-color);
    background-color: color-mix(in srgb, var(--card-background-color) 70%, transparent);
    opacity: 0.8; /* semi-transparent */
    z-index: 12; /* above temps overlay (10) */
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background-color 0.2s ease, opacity 0.2s ease, transform 0.15s ease;
  }

  .camera-light-toggle:hover {
    opacity: 1;
    background-color: color-mix(in srgb, var(--card-background-color) 85%, transparent);
  }

  .camera-light-toggle:active {
    transform: scale(0.96);
  }

  .camera-light-toggle.active {
    color: var(--state-active-color);
  }

  .camera-light-toggle ha-icon {
    --mdc-icon-size: 24px; /* Use HA default size for crisp rendering */
    width: 24px;
    height: 24px;
    display: block; /* Eliminate baseline alignment quirks */
    position: absolute; /* Force exact centering vs flex/inline quirks */
    top: 50%;
    left: 50%;
    /* Perfect centering with optional optical offset variables */
    transform: translate(-50%, -50%)
               translateX(var(--camera-light-icon-offset-x, 0px))
               translateY(var(--camera-light-icon-offset-y, -0.5px));
    pointer-events: none; /* Ensure clicks are handled by the button */
  }

  /* Print Status */
  .print-status {
    background: var(--ha-card-background);
    padding: 8px 0;
    border-radius: 8px;
    flex-grow: 1; /* Take available space */
    min-width: 0; /* Allow flex child to shrink without overflowing */
  }

  .not-printing {
    background: var(--ha-card-background);
    padding: 24px;
    /* margin-bottom: 16px; REMOVED and moved to wrapper */
    text-align: center;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    gap: 8px;
    flex-grow: 1; /* Take available space */
  }

  .not-printing .message {
    color: var(--secondary-text-color);
    font-size: 16px;
    font-weight: 500;
  }

  .not-printing .last-print {
    color: var(--secondary-text-color);
    font-size: 14px;
    opacity: 0.8;
  }

  .layer-info {
    color: var(--secondary-text-color);
    font-size: 14px;
  }

  .progress-bar {
    width: 100%;
    height: 4px;
    background: var(--secondary-background-color);
    border-radius: 2px;
    margin: 4px 0;
  }

  /* In case header uses center alignment, force the progress bar to stretch full width */
  .header .progress-bar {
    align-self: stretch;
  }

  .progress-fill {
    width: 0%;
    height: 100%;
    background: var(--state-active-color);
    border-radius: 2px;
    transition: width 0.3s;
  }

  /* Control Buttons */
  .controls {
    display: flex;
    gap: 8px;
    margin-top: 8px;
  }

  .btn {
    padding: 8px 24px;
    border: none;
    border-radius: 8px;
    font-weight: 500;
    font-size: 16px;
    cursor: pointer;
  }

  .btn-pause {
    background: var(--secondary-background-color);
    color: var(--primary-text-color);
  }

  .btn-stop {
    background: var(--error-color);
    color: var(--text-primary-color);
  }

  /* Temperature Display */
  .temperatures {
    position: absolute;
    top: auto; /* Ensure bottom positioning takes precedence */
    bottom: 10px; /* Positioned at the bottom of the camera feed */
    left: 10px; /* Adjusted for positioning over camera feed */
    right: 10px; /* Adjusted for positioning over camera feed */
    width: auto; /* Let padding and flex define width, or use calc(100% - 20px) */
    color: var(--secondary-text-color);
    padding: 4px 8px; /* Adjusted padding */
    border-radius: 8px;
    font-size: 14px;
    background-color: color-mix(in srgb, var(--card-background-color) 70%, transparent); /* Slightly less transparent for readability */
    text-transform: capitalize;
    z-index: 10; /* Ensure it's above camera feed content but not necessarily everything */
    display: flex;
    justify-content: space-around;
    align-items: center;
    text-align: center;
    flex-direction: row !important; /* Ensure horizontal layout */
    flex-wrap: nowrap; /* Prevent items from wrapping */
    opacity: 0.9; /* Slightly less transparent for readability */
  }

  .temperatures::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 20%;
    right: 20%;
    height: 1px;
    background-color: rgba(79, 85, 85, 0.29);
  }

  .temp-item {
    color: var(--primary-text-color);
    cursor: pointer;
    border-radius: 12px;
    transition: background-color 0.2s ease;
    -webkit-tap-highlight-color: transparent;
    flex: 0 1 auto; /* Allow item to size based on content, not grow, but shrink */
    padding: 6px 24px; /* Adjusted top/bottom and increased left/right padding */
    width: auto; /* Ensure width is not forced to 100% by other rules */
    font-size: 12px; /* Slightly bigger than temp-value */
    text-align: center;
  }

  .temp-item:hover {
    background-color: var(--secondary-background-color);
  }

  .temp-item:active {
    background-color: var(--primary-color);
    opacity: 0.8;
  }

  .temp-value {
    font-size: 14px;
    font-weight: 500;
    font-weight: bold;
    text-align: center;
  }

  /* Dialog Styles */
  .dialog-content {
    padding: 20px;
    min-width: 300px;
    box-sizing: border-box;
  }

  ha-dialog {
    --mdc-dialog-min-width: 320px;
    --mdc-dialog-max-width: 480px;
    --ha-dialog-border-radius: 12px;
    --dialog-content-padding: 0;
  }

  .temp-input {
    display: block;
    width: 100%;
    margin: 8px 0;
  }

  .speed-select {
    display: block;
    width: 100%;
    margin: 8px 0;
  }

  .range-limits {
    color: var(--secondary-text-color);
    font-size: 14px;
    margin-top: 8px;
    text-align: center;
  }

  mwc-button.save-button {
    --mdc-theme-primary: var(--primary-color);
  }

  mwc-button.cancel-button {
    --mdc-theme-primary: var(--secondary-text-color);
  }

  ha-textfield {
    width: 100%;
  }

  ha-select {
    width: 100%;
  }

  /* Materials */
  .materials {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(60px, 1fr));
    gap: 16px;
    padding: 4px;
  }

  .material-slot {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    text-align: center;
  }

  .material-circle {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    border: 1px solid rgba(79, 85, 85, 0.29);
    position: relative;
    transition: transform 0.3s ease;
  }

  .material-circle.active {
    transform: scale(1.1);
    box-shadow: 0 0 0 2px var(--primary-background-color),
                0 0 0 4px var(--primary-color);
  }

  .material-type {
    font-size: 12px;
    color: var(--primary-text-color);
    text-align: center;
  }

  /* Responsive: stack header and status on small screens */
  @media (max-width: 480px) {
    .print-status-header-wrapper {
      flex-direction: column;
      gap: 8px;
    }

    .print-status,
    .header {
      width: 100%;
      min-width: 0; /* Ensure children can shrink */
    }

    .header {
      flex-shrink: 1; /* Override earlier flex-shrink: 0 to allow shrinking */
      align-items: stretch; /* Use full width for inner content */
    }

    .header-controls {
      flex-wrap: wrap; /* Avoid controls pushing width */
      justify-content: center; /* Keep nice alignment on mobile */
      gap: 8px;
    }
    /* Scale down typography, spacing, and icons on small cards */
    .header { font-size: 14px; padding: 2px 6px; }
    .status { font-size: 14px; }
    .progress-text, .layer-info { font-size: 12px; }
    .progress-bar { height: 3px; margin: 2px 0; }
    .header-controls .icon-button { padding: 6px; }
    .header-controls .icon-button ha-icon { width: 20px; height: 20px; }

    .print-preview { gap: 6px; }
    .preview-image { width: 72px; }
    .print-details h3 { font-size: 14px; }
    .print-details .print-stats { font-size: 12px; }
    .btn { padding: 6px 12px; font-size: 14px; }

    .temperatures { font-size: 11px; padding: 2px 4px; }
    .temp-item { padding: 2px 8px; font-size: 10px; }
    .temp-value { font-size: 11px; }
    .camera-label { font-size: 12px; padding: 2px 6px; }
    .camera-light-toggle { width: 28px; height: 28px; }
    .camera-light-toggle ha-icon { --mdc-icon-size: 20px; width: 20px; height: 20px; }
  }

  /* Extra-small mobile: further reduce on very narrow cards */
  @media (max-width: 360px) {
    .temperatures { font-size: 10px; padding: 1px 3px; }
    .temp-item { padding: 1px 6px; font-size: 9px; }
    .temp-value { font-size: 10px; }

    .camera-light-toggle { width: 24px; height: 24px; }
    .camera-light-toggle ha-icon { --mdc-icon-size: 18px; width: 18px; height: 18px; }
  }

  /* Container query (late in file to win cascade): on narrow cards, stack and stretch header
     so the progress bar extends fully even on desktop with small card columns */
  @container (max-width: 600px) {
    .print-status-header-wrapper {
      flex-direction: column;
      gap: 8px;
    }

    .print-status,
    .header {
      width: 100%;
      min-width: 0;
    }

    .header {
      flex-shrink: 1;
      align-items: stretch;
    }

    .header-controls {
      flex-wrap: wrap;
      justify-content: center;
      gap: 8px;
    }
  }
`;