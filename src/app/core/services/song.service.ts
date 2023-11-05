import { HttpClient } from '@angular/common/http'
import { Injectable, inject } from '@angular/core'

import { PageOptions, PageResponse, Song } from '@core/models'
import { environment } from '@environment'

@Injectable({
  providedIn: 'root',
})
export class SongService {
  private readonly httpClient = inject(HttpClient)

  getPopular() {
    return this.httpClient.get<PageResponse<Song>>(`${environment.apiUrl}/songs/popular`, {
      params: { take: String(12), page: String(1) },
    })
  }

  getSongs({ take, page }: PageOptions) {
    return this.httpClient.get<PageResponse<Song>>(`${environment.apiUrl}/songs`, {
      params: { take: String(take), page: String(page + 1) },
    })
  }
}
