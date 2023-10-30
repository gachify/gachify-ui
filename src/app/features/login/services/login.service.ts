import { HttpClient } from '@angular/common/http'
import { Injectable, inject } from '@angular/core'

import { AuthResponse } from '@core/models'
import { environment } from '@environment'

@Injectable()
export class LoginService {
  private readonly httpClient = inject(HttpClient)

  login(payload: { email: string; password: string }) {
    return this.httpClient.post<AuthResponse>(`${environment.apiUrl}/auth/login`, payload)
  }
}
