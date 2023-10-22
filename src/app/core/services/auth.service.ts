import { HttpClient } from '@angular/common/http'
import { Injectable, inject } from '@angular/core'

import { AuthResponse } from '@core/models'
import { environment } from '@environment'

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly httpClient = inject(HttpClient)

  whoAmI() {
    return this.httpClient.get<AuthResponse>(`${environment.apiUrl}/auth/whoami`)
  }
}
