import { HttpClient } from '@angular/common/http'
import { Injectable, inject } from '@angular/core'
import { map } from 'rxjs'

import { Artist, PageResponse, Remix } from '@core/models'

@Injectable({
  providedIn: 'root',
})
export class ArtistRepository {
  private readonly httpClient = inject(HttpClient)

  getPopular() {
    // /artists/popular
    return this.httpClient.get<PageResponse<Artist>>(`assets/mocks/artists.json`).pipe(map((response) => response.data))
  }

  getDetails(artistId: string) {
    // /artists/:id
    return this.httpClient.get<Artist>(`assets/mocks/artist.json`)
  }

  getRemixes(artistId: string) {
    // /artists/:id/remixes
    // Get first 5 remixes
    return this.httpClient.get<PageResponse<Remix>>(`assets/mocks/remixes.json`)
  }

  getSimilarArtists() {
    // /artists/:id/similar-artists
    return this.httpClient.get<PageResponse<Artist>>(`assets/mocks/artists.json`)
  }
}
