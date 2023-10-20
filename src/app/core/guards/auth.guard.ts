import { inject } from '@angular/core'
import { CanActivateFn, Router } from '@angular/router'
import { Store } from '@ngxs/store'

import { AuthSelectors } from '@core/state'

export const AuthGuard: CanActivateFn = () => {
  const isAuthenticated = inject(Store).selectSnapshot(AuthSelectors.isAuthenticated)

  if (!isAuthenticated) {
    inject(Router).navigate(['/login'])
  }

  return isAuthenticated
}
