import { HttpClient } from '@angular/common/http'
import { Injectable, inject } from '@angular/core'

import { PageResponse, Playlist } from '@core/models'
import { environment } from '@environment'

@Injectable()
export class LibraryPlaylistsService {
  private readonly httpClient = inject(HttpClient)

  fetchAll() {
    return this.httpClient.get<PageResponse<Playlist>>(`${environment.apiUrl}/playlists/my`)
  }

  create(name: string) {
    return this.httpClient.post<Playlist>(`${environment.apiUrl}/playlists`, { name })
  }
}
