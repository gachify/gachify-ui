import { HttpClient } from '@angular/common/http'
import { Injectable, inject } from '@angular/core'
import { map } from 'rxjs'

import { PageOptions, PageResponse, Remix } from '@core/models'

@Injectable({
  providedIn: 'root',
})
export class RemixRepository {
  private readonly httpClient = inject(HttpClient)

  getPopular() {
    // return this.httpClient
    //   .get<PageResponse<Remix>>(`${environment.apiUrl}/remixes/popular`, {
    //     params: { take: String(12), page: String(1) },
    //   })
    //   .pipe(map((response) => response.data))

    // /remixes/popular
    return this.httpClient.get<PageResponse<Remix>>('/remixes/popular').pipe(map((response) => response.data))
  }

  get({ limit, offset }: PageOptions) {
    // return this.httpClient.get<PageResponse<Remix>>(`${environment.apiUrl}/remixes`, {
    //   params: { take: String(take), offset: String(page + 1) },
    // })

    return this.httpClient.get<PageResponse<Remix>>(`assets/mocks/remixes-page.json`).pipe(map((response) => response))
  }
}
