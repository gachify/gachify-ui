import { Injectable, computed, inject, signal } from '@angular/core'
import { Router } from '@angular/router'
import { Observable, catchError, map, of, tap } from 'rxjs'

import { UserRepository } from '@core/repositories'
import { User } from '@core/models'

@Injectable({
  providedIn: 'root',
})
export class AuthState {
  private readonly router = inject(Router)
  private readonly repository = inject(UserRepository)

  readonly user = signal<User | null>(null)
  readonly initialCheck = signal<boolean>(true)

  readonly isAuthenticated = computed(() => Boolean(this.user()))

  isAuthenticated$(): Observable<boolean> {
    if (!this.initialCheck()) {
      return of(Boolean(this.user()))
    }

    return this.repository.whoAmI().pipe(
      tap((user) => {
        this.user.set(user)
        this.initialCheck.set(false)
      }),
      map((user) => Boolean(user)),
      catchError(() => {
        this.initialCheck.set(false)
        return of(false)
      }),
    )
  }

  login(payload: User): void {
    this.user.set(payload)

    this.router.navigate(['/'])
  }

  logout(): void {
    this.user.set(null)

    this.router.navigate(['/login'])
  }
}
