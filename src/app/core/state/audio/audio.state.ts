import { Injectable, inject } from '@angular/core'
import { Action, State, StateContext } from '@ngxs/store'

import { AudioActions } from './audio.actions'

import { PlayerStatus } from '@core/models'
import { AudioService } from '@core/services'
import { CookieUtil } from '@core/utils'

export interface AudioStateModel {
  status: PlayerStatus
  muted: boolean
  volume: number
  duration: number
  currentTime: number
}

const VOLUME_COOKIE = 'gachi-volume'

@State<AudioStateModel>({
  name: 'audio',
  defaults: {
    status: PlayerStatus.Pending,
    volume: Number(CookieUtil.get(VOLUME_COOKIE)) || 50,
    muted: false,
    duration: 0,
    currentTime: 0,
  },
})
@Injectable()
export class AudioState {
  private readonly audioService = inject(AudioService)

  @Action(AudioActions.Load)
  load(ctx: StateContext<AudioStateModel>, { payload: { song } }: AudioActions.Load) {
    // todo: move to LoadPreferences action
    const { volume } = ctx.getState()
    this.audioService.setVolume(volume)

    ctx.patchState({
      status: PlayerStatus.Loading,
      duration: song.duration,
      currentTime: 0,
    })

    this.audioService.load(song.id)
  }

  @Action(AudioActions.Play)
  play(ctx: StateContext<AudioStateModel>) {
    ctx.patchState({ status: PlayerStatus.Playing })
    this.audioService.play()
  }

  @Action(AudioActions.Pause)
  pause(ctx: StateContext<AudioStateModel>) {
    ctx.patchState({ status: PlayerStatus.Paused })
    this.audioService.pause()
  }

  @Action(AudioActions.TogglePlay)
  togglePlay(ctx: StateContext<AudioStateModel>) {
    const state = ctx.getState()

    switch (state.status) {
      case PlayerStatus.Playing:
        ctx.dispatch(new AudioActions.Pause())
        break
      case PlayerStatus.Paused:
        ctx.dispatch(new AudioActions.Play())
        break
      default:
        break
    }
  }

  @Action(AudioActions.Seek)
  seek(ctx: StateContext<AudioStateModel>, { payload: { time } }: AudioActions.Seek) {
    ctx.patchState({ currentTime: time })
    this.audioService.seek(time)
  }

  @Action(AudioActions.SetVolume)
  setVolume(ctx: StateContext<AudioStateModel>, { payload: { volume } }: AudioActions.SetVolume) {
    ctx.patchState({ volume })
    CookieUtil.set({ name: VOLUME_COOKIE, value: String(volume), expires: 30 })
    this.audioService.setVolume(volume)
  }

  @Action(AudioActions.ToggleMute)
  toggleMute(ctx: StateContext<AudioStateModel>) {
    const { muted } = ctx.getState()
    ctx.patchState({ muted: !muted })

    this.audioService.toggleMute()
  }

  @Action(AudioActions.SetCurrentTime)
  setCurrentTime(ctx: StateContext<AudioStateModel>, { payload: { time } }: AudioActions.SetCurrentTime) {
    ctx.patchState({ currentTime: time })
  }
}
