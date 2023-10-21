import { HttpClient } from '@angular/common/http'
import { Injectable, inject } from '@angular/core'

import { environment } from '@environment'

@Injectable()
export class LoginService {
  private readonly httpClient = inject(HttpClient)

  login(payload: { username: string; password: string }) {
    return this.httpClient.post<{ token: string }>(`${environment.apiUrl}/auth/login`, payload)
  }
}
