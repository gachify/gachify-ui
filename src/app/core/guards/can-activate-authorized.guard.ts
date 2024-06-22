import { inject } from '@angular/core'
import { ActivatedRouteSnapshot, CanActivateFn, Router } from '@angular/router'

import { REDIRECT_URL_PARAM } from '@core/constants'
import { AuthState } from '@core/state'

export const canActivateAuthorized: CanActivateFn = (route: ActivatedRouteSnapshot) => {
  const authState = inject(AuthState)
  const router = inject(Router)
  const isAuthenticated = authState.isAuthenticated()

  let currentRoute = route
  while (currentRoute.firstChild) {
    currentRoute = currentRoute.firstChild
  }

  const redirectUrl = currentRoute.url.join('/')

  if (!isAuthenticated) {
    router.navigate(['/sso'], { queryParams: { [REDIRECT_URL_PARAM]: redirectUrl } })
  }

  return isAuthenticated
}
