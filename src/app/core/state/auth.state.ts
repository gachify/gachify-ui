import { Injectable, computed, inject, signal } from '@angular/core'
import { Router } from '@angular/router'
import { EMPTY, catchError, of, tap } from 'rxjs'

import { UserRepository } from '@core/repositories'
import { StateModel } from '@core/models'

interface AuthStateModel {
  username: string | null
}

@Injectable({
  providedIn: 'root',
})
export class AuthState implements StateModel<AuthStateModel> {
  private readonly router = inject(Router)
  private readonly repository = inject(UserRepository)

  readonly username = signal<string | null>(null)

  readonly isAuthenticated = computed(() => Boolean(this.username()))

  constructor() {
    this.whoAmI()
  }

  whoAmI(): void {
    this.repository
      .whoAmI()
      .pipe(
        tap((response) => this.username.set(response.username)),
        catchError(() => {
          this.username.set(null)
          return of(EMPTY)
        }),
      )
      .subscribe()
  }

  login(payload: { username: string }): void {
    this.username.set(payload.username)

    this.router.navigate(['/'])
  }

  logout(): void {
    this.username.set(null)

    this.router.navigate(['/login'])
  }
}
