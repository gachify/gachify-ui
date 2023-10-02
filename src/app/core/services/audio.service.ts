import { Injectable, OnDestroy, effect, signal } from '@angular/core'

import { Song } from '@core/models'
import { environment } from '@environment'

enum AudioEvents {
  TIME_UPDATE = 'timeupdate',
  LOADED_DATA = 'loadeddata',
  LOADED_METADATA = 'loadedmetadata',
  ENDED = 'ended',
}

@Injectable({
  providedIn: 'root',
})
export class AudioService implements OnDestroy {
  private readonly audio = new Audio()

  readonly song = signal<null | Song>(null)

  readonly sync = signal(false)
  readonly playing = signal(false)
  readonly duration = signal(0)
  readonly muted = signal(false)
  readonly volume = signal(100)
  readonly currentTime = signal(0)

  constructor() {
    this.registerEvents()
  }

  ngOnDestroy() {
    this.removeEvents()
    this.audio.remove()
  }

  play() {
    this.playing.set(true)
    this.audio.play()
  }

  togglePlay() {
    if (this.audio.paused || this.audio.ended) {
      this.playing.set(true)
      this.audio.play()
    } else {
      this.playing.set(false)
      this.audio.pause()
    }
  }

  pause() {
    this.playing.set(false)
    this.audio.pause()
  }

  seek(seconds: number) {
    this.audio.currentTime = seconds
  }

  setVolume(volume: number) {
    if (this.audio.muted) {
      this.muted.set(false)
      this.audio.muted = false
    }

    this.volume.set(volume)
    this.audio.volume = Number((volume / 100).toFixed(2))

    if (this.audio.volume === 0) {
      this.muted.set(true)
      this.audio.muted = true
    }
  }

  toggleMute() {
    const newValue = !this.audio.muted

    this.muted.set(newValue)
    this.audio.muted = newValue
  }

  load(song: Song) {
    if (song.id === this.song()?.id) {
      return
    }

    this.song.set(song)
    this.audio.src = `${environment.mediaUrl}/${song.id}.mp3`
    this.duration.set(song.duration)
    this.currentTime.set(0)
    this.playing.set(false)
    this.sync.set(true)
    this.audio.load()
  }

  private registerEvents() {
    this.audio.addEventListener(AudioEvents.LOADED_METADATA, this.onLoadedMetadata)
    this.audio.addEventListener(AudioEvents.LOADED_DATA, this.onLoadedData)
    this.audio.addEventListener(AudioEvents.TIME_UPDATE, this.onTimeUpdate)
    this.audio.addEventListener(AudioEvents.ENDED, this.onEnded)
  }

  private removeEvents() {
    this.audio.removeEventListener(AudioEvents.LOADED_METADATA, this.onLoadedMetadata)
    this.audio.removeEventListener(AudioEvents.LOADED_DATA, this.onLoadedData)
    this.audio.removeEventListener(AudioEvents.TIME_UPDATE, this.onTimeUpdate)
    this.audio.removeEventListener(AudioEvents.ENDED, this.onEnded)
  }

  private readonly onLoadedData = () => {
    this.play()
    this.sync.set(false)
  }

  private readonly onLoadedMetadata = () => {
    this.duration.set(this.audio.duration)
  }

  private readonly onTimeUpdate = () => {
    this.currentTime.set(this.audio.currentTime)
  }

  private readonly onEnded = () => {
    this.playing.set(false)
  }
}
