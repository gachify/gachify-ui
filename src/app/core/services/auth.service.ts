import { Injectable, inject } from '@angular/core'
import { HttpClient } from '@angular/common/http'

import { environment } from '@environment'

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly httpClient = inject(HttpClient)

  login(payload: { username: string; password: string }) {
    return this.httpClient.post<{ token: string }>(environment.apiUrl, payload)
  }

  logout(token: string | null) {
    return this.httpClient.get(environment.apiUrl)
  }
}
