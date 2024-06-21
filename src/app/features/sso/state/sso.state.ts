import { Injectable, inject } from '@angular/core'
import { take } from 'rxjs'
import { Router } from '@angular/router'

import { AuthState } from '@core/state'
import { UserRepository } from '@core/repositories'

@Injectable()
export class SsoState {
  private readonly repository = inject(UserRepository)
  private readonly authState = inject(AuthState)
  private readonly router = inject(Router)

  whoami(): void {
    this.repository
      .whoAmI()
      .pipe(take(1))
      .subscribe({
        next: (user) => {
          this.authState.login(user)
        },
        error: () => {
          this.router.navigate(['/login'])
        },
      })
  }
}
