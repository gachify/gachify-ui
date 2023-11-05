import { createSelector } from '@ngxs/store'

import { AudioState, AudioStateModel } from './audio.state'

import { PlayerStatus } from '@core/models'

export class AudioSelectors {
  static status = createSelector([AudioState], (state: AudioStateModel) => state.status)

  static active = createSelector([AudioState], (state: AudioStateModel) => state.status !== PlayerStatus.Pending)

  static duration = createSelector([AudioState], (state: AudioStateModel) => state.duration)

  static currentTime = createSelector([AudioState], (state: AudioStateModel) => state.currentTime)

  static volume = createSelector([AudioState], (state: AudioStateModel) => state.volume)

  static muted = createSelector([AudioState], (state: AudioStateModel) => state.muted)
}
