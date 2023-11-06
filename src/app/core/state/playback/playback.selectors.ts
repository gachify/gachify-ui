import { createSelector } from '@ngxs/store'

import { PlaybackState, PlaybackStateModel } from './playback.state'

import { RepeatOption } from '@core/models'

export class PlaybackSelectors {
  static repeat = createSelector([PlaybackState], ({ repeat }: PlaybackStateModel) => repeat)

  static currentSong = createSelector([PlaybackState], ({ currentSong }: PlaybackStateModel) => currentSong)

  static songs = createSelector([PlaybackState], ({ shuffledSongs }: PlaybackStateModel) => shuffledSongs)

  static shuffle = createSelector([PlaybackState], ({ shuffle }: PlaybackStateModel) => shuffle)

  static artist = createSelector([PlaybackState], ({ artist }: PlaybackStateModel) => artist)

  static playlist = createSelector([PlaybackState], ({ playlist }: PlaybackStateModel) => playlist)

  static hasPreviousSong = createSelector(
    [PlaybackState],
    ({ currentSong, repeat, shuffledSongs }: PlaybackStateModel) =>
      currentSong && (shuffledSongs.findIndex((song) => song.id === currentSong.id) > 0 || repeat === RepeatOption.All),
  )

  static hasNextSong = createSelector(
    [PlaybackState],
    ({ currentSong, repeat, shuffledSongs }: PlaybackStateModel) =>
      currentSong &&
      (shuffledSongs.findIndex((song) => song.id === currentSong.id) < shuffledSongs.length - 1 ||
        repeat === RepeatOption.All),
  )
}
