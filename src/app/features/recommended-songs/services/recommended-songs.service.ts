import { HttpClient } from '@angular/common/http'
import { Injectable, inject } from '@angular/core'

import { Song } from '@core/models'
import { environment } from '@environment'

@Injectable()
export class RecommendedSongsService {
  private readonly httpClient = inject(HttpClient)

  fetchAll() {
    return this.httpClient.get<Song[]>(`${environment.apiUrl}/songs/popular`)
  }
}
