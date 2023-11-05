import { Injectable } from '@angular/core'
import { Action, State, StateContext } from '@ngxs/store'

import { shuffle as shuffleFunction } from '../../utils'
import { PlaybackActions } from './playback.actions'
import { AudioActions } from '../audio'

import { RepeatOption, Song } from '@core/models'

export interface PlaybackStateModel {
  shuffle: boolean
  repeat: RepeatOption
  songs: Song[]
  currentSong: Song | null
}

@State<PlaybackStateModel>({
  name: 'playback',
  defaults: {
    shuffle: false,
    repeat: RepeatOption.None,
    songs: [],
    currentSong: null,
  },
})
@Injectable()
export class PlaybackState {
  @Action(PlaybackActions.NextSong)
  nextSong(ctx: StateContext<PlaybackStateModel>) {
    const { currentSong, songs } = ctx.getState()

    if (!currentSong) {
      return
    }

    const currentIndex = songs.indexOf(currentSong)
    let nextSong: Song

    if (currentIndex < songs.length - 1) {
      nextSong = songs[currentIndex + 1]
    } else {
      nextSong = songs[0]
    }

    ctx.patchState({ currentSong: nextSong })
    ctx.dispatch(new AudioActions.Load({ song: nextSong }))
  }

  @Action(PlaybackActions.PreviousSong)
  previousSong(ctx: StateContext<PlaybackStateModel>) {
    const { currentSong, songs } = ctx.getState()

    if (!currentSong) {
      return
    }

    const currentIndex = songs.indexOf(currentSong)
    let nextSong: Song

    if (currentIndex > 0) {
      nextSong = songs[currentIndex - 1]
    } else {
      nextSong = songs[songs.length - 1]
    }

    ctx.patchState({ currentSong: nextSong })
    ctx.dispatch(new AudioActions.Load({ song: nextSong }))
  }

  @Action(PlaybackActions.ToggleRepeat)
  toggleRepeat(ctx: StateContext<PlaybackStateModel>) {
    const { repeat } = ctx.getState()

    switch (repeat) {
      case RepeatOption.None:
        ctx.patchState({ repeat: RepeatOption.All })
        break
      case RepeatOption.All:
        ctx.patchState({ repeat: RepeatOption.Single })
        break
      case RepeatOption.Single:
      default:
        ctx.patchState({ repeat: RepeatOption.None })
        break
    }
  }

  @Action(PlaybackActions.ToggleShuffle)
  toggleShuffle(ctx: StateContext<PlaybackStateModel>) {
    const { shuffle, songs } = ctx.getState()
    const newShuffleState = !shuffle

    if (newShuffleState) {
      // Current song should be first so remove before shuffle and add after
      // Should store original array
      // Original array should always have same order (BE)
      const shuffledArray = shuffleFunction(songs)
    }

    ctx.patchState({ shuffle: newShuffleState })
  }
}
