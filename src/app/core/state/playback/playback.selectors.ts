import { createSelector } from '@ngxs/store'

import { PlaybackState, PlaybackStateModel } from './playback.state'

import { RepeatOption } from '@core/models'

export class PlaybackSelectors {
  static repeat = createSelector([PlaybackState], (state: PlaybackStateModel) => state.repeat)

  static currentSong = createSelector([PlaybackState], (state: PlaybackStateModel) => state.currentSong)

  static songs = createSelector([PlaybackState], (state: PlaybackStateModel) => state.songs)

  static shuffle = createSelector([PlaybackState], (state: PlaybackStateModel) => state.shuffle)

  static hasPreviousSong = createSelector(
    [PlaybackState],
    (state: PlaybackStateModel) =>
      state.currentSong && (state.songs.indexOf(state.currentSong) > 0 || state.repeat === RepeatOption.All),
  )

  static hasNextSong = createSelector(
    [PlaybackState],
    (state: PlaybackStateModel) =>
      state.currentSong &&
      (state.songs.indexOf(state.currentSong) < state.songs.length - 1 || state.repeat === RepeatOption.All),
  )
}
