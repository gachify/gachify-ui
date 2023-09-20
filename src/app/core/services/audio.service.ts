import { Injectable, OnDestroy, effect, signal } from '@angular/core'

import { Song } from '@core/models'
import { environment } from '@environment'

enum AudioEvents {
  TIME_UPDATE = 'timeupdate',
  LOADED_METADATA = 'loadedmetadata',
}

@Injectable({
  providedIn: 'root',
})
export class AudioService implements OnDestroy {
  private readonly audio = new Audio()

  readonly song = signal<null | Song>({
    id: '300',
    name: 'Король и Шут - Фокусник Король и Шут - Фокусник Король и Шут - Фокусник Король и Шут - Фокусник',
    pictureUrl:
      'https://i.ytimg.com/vi/s33qYTbmZJM/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDJHq58xBrvAwOL0mcCg_EbqKPsDA',
    artist: {
      id: '',
      name: 'GachiBasser        GachiBasser    GachiBasser',
    },
    duration: 212,
  })

  readonly ready = signal(false)
  readonly playing = signal(false)
  readonly duration = signal(0)
  readonly muted = signal(false)
  readonly volume = signal(100)
  readonly currentTime = signal(0)

  constructor() {
    this.registerEvents()

    effect(
      () => {
        if (this.song()) {
          this.load(this.song() as Song)
        }
      },
      { allowSignalWrites: true },
    )
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

  private load(song: Song) {
    this.audio.src = `${environment.mediaUrl}/${song.id}`
    this.duration.set(song.duration)
    this.currentTime.set(0)
    this.playing.set(false)
    this.audio.load()
  }

  private registerEvents() {
    this.audio.addEventListener(AudioEvents.LOADED_METADATA, this.onLoadedMetadata)
    this.audio.addEventListener(AudioEvents.TIME_UPDATE, this.onTimeUpdate)
  }

  private removeEvents() {
    this.audio.removeEventListener(AudioEvents.LOADED_METADATA, this.onLoadedMetadata)
    this.audio.removeEventListener(AudioEvents.TIME_UPDATE, this.onTimeUpdate)
  }

  private readonly onLoadedMetadata = () => {
    this.ready.set(true)
    this.playing.set(true)
    this.audio.play()
    this.duration.set(this.audio.duration)
  }

  private readonly onTimeUpdate = () => {
    this.currentTime.set(this.audio.currentTime)
  }
}
