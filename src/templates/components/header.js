import { html } from 'lit';
import { localize } from '../../utils/localize';
import { formatDuration } from '../../utils/formatters';

export const headerTemplate = (entities, controls) => html`
  <div class="header">
    <div>
      <div class="status">
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
          ${localize.t('time.left')}: ${formatDuration(entities.remainingTime)}
        </div>
      ` : ''}
    </div>
    <div class="header-controls">
      ${entities.aux_fan_entity ? html`
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