// src/templates/card-template.js
import { html } from 'lit';
import { headerTemplate } from './components/header';
import { cameraFeedTemplate } from './components/camera-feed';
import { printStatusTemplate } from './components/print-status';
import { temperatureDisplayTemplate } from './components/temperature-display';
import { materialSlotsTemplate } from './components/material-slots';
import { temperatureDialogTemplate } from './components/temperature-controls';
import { confirmDialogTemplate } from './components/confirm-dialog';

export const cardTemplate = (context) => {
  const { 
    entities, 
    hass, 
    amsSlots, 
    _toggleLight, 
    _toggleFan, 
    _cameraError, 
    isOnline,
    formatters,
    dialogConfig,
    confirmDialog,
    setDialogConfig,
    handlePauseDialog,
    handleStopDialog
  } = context;

  if (!entities || !hass) return html``;

  const controls = {
    lightState: hass.states[entities.chamber_light_entity]?.state,
    fanState: hass.states[entities.aux_fan_entity]?.state,
    hasFan: !!entities.aux_fan_entity,
    onLightToggle: _toggleLight,
    onFanToggle: _toggleFan,
    hass
  };

  const cameraProps = {
    isOnline,
    hasError: _cameraError,
    currentStage: entities.currentStage,
    entityPicture: hass.states[entities.camera_entity]?.attributes?.entity_picture,
    hass,
    cameraEntity: entities.camera_entity,
    onError: context.handleImageError,
    onLoad: context.handleImageLoad
  };

  return html`
    <div class="card">
      <div class="camera-and-temps-wrapper">
        ${cameraFeedTemplate(cameraProps)}
        <button
          class="camera-light-toggle ${controls.lightState === 'on' ? 'active' : ''}"
          @click=${controls.onLightToggle}
          title="Toggle light"
        >
          <ha-icon icon="mdi:lightbulb"></ha-icon>
        </button>
        ${temperatureDisplayTemplate(entities, hass, dialogConfig, setDialogConfig)}
      </div>
      <div class="print-status-header-wrapper">
        ${printStatusTemplate(entities, {
          hass,
          onPause: handlePauseDialog,
          onStop: handleStopDialog,
          onImageError: context.handleImageError
        })}
        ${headerTemplate(entities, controls)}
      </div>
      ${materialSlotsTemplate(amsSlots)}
      ${temperatureDialogTemplate(dialogConfig, hass)}
      ${confirmDialogTemplate(confirmDialog)}
    </div>
  `;
};