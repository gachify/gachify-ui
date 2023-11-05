import { HttpClient } from '@angular/common/http'
import { Injectable, inject } from '@angular/core'

import { AuthResponse } from '@core/models'
import { environment } from '@environment'

const PLAYBACK_MINIMAL_DURATION = 30 * 1000

@Injectable({ providedIn: 'root' })
export class TrackingService {
  private readonly httpClient = inject(HttpClient)

  private playbackTimer: ReturnType<typeof setTimeout> | null = null
  private playbackSongId = ''
  private playbackTrackingEnabled = true

  refreshPlaybackTracking() {
    this.playbackTrackingEnabled = true
  }

  startPlaybackTracking(songId: string) {
    if (this.playbackSongId !== songId) {
      this.playbackSongId = songId
      this.playbackTrackingEnabled = true
    }

    if (this.playbackTrackingEnabled) {
      this.playbackTimer = setTimeout(() => this.savePlaybackEvent(), PLAYBACK_MINIMAL_DURATION)
    }
  }

  stopPlaybackTracking() {
    if (this.playbackTimer) {
      clearTimeout(this.playbackTimer)
      this.playbackTimer = null
    }
  }

  private savePlaybackEvent() {
    this.playbackTrackingEnabled = false
    this.httpClient
      .post<AuthResponse>(`${environment.apiUrl}/tracking/playback`, {
        songId: this.playbackSongId,
      })
      .subscribe()
  }
}
