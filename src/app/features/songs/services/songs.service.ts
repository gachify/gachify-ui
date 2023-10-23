import { HttpClient } from '@angular/common/http'
import { Injectable, inject } from '@angular/core'

import { PageOptions, PageResponse, Song } from '@core/models'
import { environment } from '@environment'

@Injectable()
export class SongsService {
  private readonly httpClient = inject(HttpClient)

  getSongs({ take, page }: PageOptions) {
    return this.httpClient.get<PageResponse<Song>>(`${environment.apiUrl}/songs`, {
      params: { take: String(take), page: String(page + 1) },
    })
  }

  uploadSong(youtubeUrl: string) {
    return this.httpClient.post<Song>(`${environment.apiUrl}/songs`, {
      youtubeUrl,
    })
  }
}
