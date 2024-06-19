import { inject } from '@angular/core'
import { CanActivateFn, Router } from '@angular/router'
import { tap } from 'rxjs'

import { AuthState } from '@core/state'

export const canActivateAuthorized: CanActivateFn = () => {
  const authState = inject(AuthState)
  const router = inject(Router)

  return authState.isAuthenticated$().pipe(
    tap((isAuthenticated) => {
      if (!isAuthenticated) {
        router.navigate(['/login'])
      }
    }),
  )
}
