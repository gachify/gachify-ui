import { HttpClient } from '@angular/common/http'
import { Injectable, computed, inject } from '@angular/core'

import { Song } from '@core/models'
import { environment } from '@environment'
import { toRequestState } from '@core/utils'

@Injectable()
export class RecommendedSongsService {
  private readonly httpClient = inject(HttpClient)

  private readonly requestState = toRequestState(
    this.httpClient.get<Song[]>(`${environment.apiUrl}/assets/mocks/recommended-songs.json`),
  )

  readonly songs = computed(() => this.requestState().data)
  readonly loading = computed(() => this.requestState().loading)
}
