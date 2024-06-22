import { HttpClient } from '@angular/common/http'
import { Injectable, inject } from '@angular/core'
import { delay, of } from 'rxjs'

import { User } from '@core/models'
import { environment } from '@environment'

@Injectable({ providedIn: 'root' })
export class UserRepository {
  private readonly httpClient = inject(HttpClient)

  whoAmI() {
    const user: User = {
      uuid: '1',
      email: '',
      username: 'John Doe',
    }
    // return of(user).pipe(delay(2000))
    return this.httpClient.get<User>(`${environment.apiUrl}/auth/whoami`)
  }
}
