import { inject } from '@angular/core'
import { CanActivateFn, Router } from '@angular/router'

import { AuthState } from '@core/state'

export const canActivateAuthorized: CanActivateFn = () => {
  const authState = inject(AuthState)
  const router = inject(Router)

  const isAuthenticated = authState.isAuthenticated()

  if (!isAuthenticated) {
    router.navigate(['/sso'])
  }

  return isAuthenticated
}
