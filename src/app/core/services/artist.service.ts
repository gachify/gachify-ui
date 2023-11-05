import { HttpClient } from '@angular/common/http'
import { Injectable, inject } from '@angular/core'

import { PageResponse, Song } from '@core/models'
import { environment } from '@environment'

@Injectable({
  providedIn: 'root',
})
export class ArtistService {
  private readonly httpClient = inject(HttpClient)

  getSongs(artistId: string) {
    return this.httpClient.get<PageResponse<Song>>(`${environment.apiUrl}/artists/${artistId}/songs`, {
      params: { take: String(50), page: String(1) },
    })
  }
}
