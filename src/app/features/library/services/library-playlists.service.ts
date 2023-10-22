import { HttpClient } from '@angular/common/http'
import { Injectable, inject } from '@angular/core'

import { Playlist } from '@core/models'
import { environment } from '@environment'

@Injectable()
export class LibraryPlaylistsService {
  private readonly httpClient = inject(HttpClient)

  fetchAll() {
    return this.httpClient.get<Playlist[]>(`${environment.apiUrl}/playlists/my`)
  }
}
