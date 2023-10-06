import { HttpClient } from '@angular/common/http'
import { Injectable, inject } from '@angular/core'
import { delay, map } from 'rxjs'

import { Playlist } from '@core/models'
import { environment } from '@environment'

export interface PlaylistDetailsState {
  playlist?: Playlist
  loading: boolean
}

@Injectable()
export class PlaylistDetailsService {
  private readonly httpClient = inject(HttpClient)

  fetchById(playlistId: string) {
    return this.httpClient.get<Playlist[]>(`${environment.apiUrl}/assets/mocks/library-playlists.json`).pipe(
      delay(3000),
      map((response) => response[0]),
    )
  }
}
