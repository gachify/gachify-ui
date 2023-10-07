import { Injectable, inject, signal } from '@angular/core'

import { AudioService } from './audio.service'

import { Playlist, Song } from '@core/models'

@Injectable({
  providedIn: 'root',
})
export class PlaylistService {
  private readonly audioService = inject(AudioService)

  readonly playlist = signal<null | Playlist>(null)
  readonly songIndex = signal(0)

  load(playlist: Playlist, song?: Song) {
    this.playlist.set(playlist)

    if (song) {
      this.songIndex.set(playlist.songs.indexOf(song))
    } else {
      this.songIndex.set(0)
    }

    this.audioService.load(playlist.songs[this.songIndex()])
  }

  nextTrack() {
    const playlist = this.playlist()

    if (playlist) {
      this.songIndex.update((prevSongIndex) => {
        if (prevSongIndex < playlist.songs.length - 1) {
          return prevSongIndex + 1
        }

        return 0
      })

      this.audioService.load(playlist.songs[this.songIndex()])
    }
  }

  previousTrack() {
    const playlist = this.playlist()

    if (playlist) {
      this.songIndex.update((prevSongIndex) => {
        if (prevSongIndex > 0) {
          return prevSongIndex - 1
        }

        return playlist.songs.length - 1
      })

      this.audioService.load(playlist.songs[this.songIndex()])
    }
  }
}
