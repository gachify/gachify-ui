import { HttpClient } from '@angular/common/http'
import { Injectable, inject } from '@angular/core'

import { Song } from '@core/models'
import { environment } from '@environment'

@Injectable()
export class UploadSongService {
  private readonly httpClient = inject(HttpClient)

  uploadSong(youtubeUrl: string) {
    return this.httpClient.post<Song>(`${environment.apiUrl}/songs`, {
      youtubeUrl,
    })
  }
}
