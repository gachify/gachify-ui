import { Injectable, OnDestroy, inject } from '@angular/core'
import { Store } from '@ngxs/store'

import { environment } from '@environment'
import { PlayerActions } from '@core/state/player'

enum AudioEvents {
  TIME_UPDATE = 'timeupdate',
  LOADED_DATA = 'loadeddata',
  ENDED = 'ended',
}

@Injectable({
  providedIn: 'root',
})
export class AudioService implements OnDestroy {
  private readonly audio = new Audio()
  private readonly store = inject(Store)

  constructor() {
    this.registerEvents()
  }

  ngOnDestroy() {
    this.removeEvents()
    this.audio.remove()
  }

  play() {
    this.audio.play()
  }

  pause() {
    this.audio.pause()
  }

  // https://developer.mozilla.org/en-US/docs/Web/Guide/Audio_and_video_delivery/buffering_seeking_time_ranges
  seek(seconds: number) {
    this.audio.currentTime = seconds
  }

  setVolume(volume: number) {
    if (this.audio.muted) {
      this.audio.muted = false
    }

    if (this.audio.volume === 0) {
      this.audio.muted = true
    }

    this.audio.volume = Number((volume / 100).toFixed(2))
  }

  toggleMute() {
    this.audio.muted = !this.audio.muted
  }

  load(songId: string) {
    this.audio.src = `${environment.apiUrl}/songs/${songId}/stream`
    this.audio.load()
  }

  private registerEvents() {
    this.audio.addEventListener(AudioEvents.LOADED_DATA, this.onLoadedData)
    this.audio.addEventListener(AudioEvents.TIME_UPDATE, this.onTimeUpdate)
    this.audio.addEventListener(AudioEvents.ENDED, this.onEnded)
  }

  private removeEvents() {
    this.audio.removeEventListener(AudioEvents.LOADED_DATA, this.onLoadedData)
    this.audio.removeEventListener(AudioEvents.TIME_UPDATE, this.onTimeUpdate)
    this.audio.removeEventListener(AudioEvents.ENDED, this.onEnded)
  }

  private readonly onLoadedData = () => {
    this.store.dispatch(new PlayerActions.Play())
  }

  private readonly onTimeUpdate = () => {
    this.store.dispatch(new PlayerActions.SetCurrentTime({ time: Math.round(this.audio.currentTime) }))
  }

  private readonly onEnded = () => {
    this.store.dispatch(new PlayerActions.SongEnded())
  }
}
