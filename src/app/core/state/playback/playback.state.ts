import { Injectable, inject } from '@angular/core'
import { Action, State, StateContext } from '@ngxs/store'
import { tap } from 'rxjs'

import { PlaybackActions } from './playback.actions'
import { AudioActions } from '../audio'

import { shuffle as shuffleFunction } from '@core/utils'
import { Artist, Playlist, RepeatOption, Song } from '@core/models'
import { ArtistService } from '@core/services'

export interface PlaybackStateModel {
  shuffle: boolean
  repeat: RepeatOption
  songs: Song[]
  shuffledSongs: Song[]
  currentSong: Song | null
  playlist: Playlist | null
  artist: Artist | null
}

@State<PlaybackStateModel>({
  name: 'playback',
  defaults: {
    shuffle: false,
    repeat: RepeatOption.None,
    artist: null,
    playlist: null,
    songs: [],
    shuffledSongs: [],
    currentSong: null,
  },
})
@Injectable()
export class PlaybackState {
  private readonly artistService = inject(ArtistService)

  @Action(PlaybackActions.Play)
  play(ctx: StateContext<PlaybackStateModel>, { payload }: PlaybackActions.Play) {
    const { currentSong, playlist } = ctx.getState()

    if (payload.playlist && payload.playlist.id !== playlist?.id) {
      ctx.patchState({
        currentSong: payload.song,
        songs: payload.playlist.songs,
        shuffledSongs: payload.playlist.songs,
        artist: null,
      })
    }

    if (!payload.playlist && currentSong?.artist.id !== payload.song.artist.id) {
      ctx.dispatch(new PlaybackActions.FetchArtist({ artistId: payload.song.artist.id }))

      ctx.patchState({
        artist: null,
        playlist: null,
        currentSong: payload.song,
        songs: [payload.song],
      })
    }

    if (currentSong?.id === payload.song.id) {
      ctx.dispatch(new AudioActions.TogglePlay())
    } else {
      ctx.dispatch(new AudioActions.Load({ song: payload.song }))
      ctx.patchState({ currentSong: payload.song })
    }
  }

  @Action(PlaybackActions.NextSong)
  nextSong(ctx: StateContext<PlaybackStateModel>) {
    const { currentSong, songs } = ctx.getState()

    if (!currentSong) {
      return
    }

    const currentIndex = songs.findIndex((song) => song.id === currentSong.id)
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

    const currentIndex = songs.findIndex((song) => song.id === currentSong.id)
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

    ctx.patchState({ shuffle: newShuffleState, shuffledSongs: newShuffleState ? shuffleFunction(songs) : songs })
  }

  @Action(PlaybackActions.SongEnded)
  songEnded(ctx: StateContext<PlaybackStateModel>) {
    const { currentSong, repeat, shuffledSongs } = ctx.getState()

    switch (repeat) {
      case RepeatOption.Single:
        ctx.dispatch(new AudioActions.Play())
        break
      case RepeatOption.All:
        ctx.dispatch(new PlaybackActions.NextSong())
        break
      case RepeatOption.None:
      default:
        if (currentSong && shuffledSongs.findIndex((song) => song.id === currentSong.id) < shuffledSongs.length - 1) {
          ctx.dispatch(new PlaybackActions.NextSong())
        }
        break
    }
  }

  @Action(PlaybackActions.FetchArtist)
  fetchArtist(ctx: StateContext<PlaybackStateModel>, action: PlaybackActions.FetchArtist) {
    return this.artistService.getSongs(action.payload.artistId).pipe(
      tap((response) => {
        ctx.patchState({ songs: response.data, artist: response.data[0].artist, shuffledSongs: response.data })
      }),
    )
  }
}
