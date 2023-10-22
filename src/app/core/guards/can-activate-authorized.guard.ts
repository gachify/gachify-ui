import { inject } from '@angular/core'
import { CanActivateFn, Router } from '@angular/router'
import { Store } from '@ngxs/store'
import { catchError, map, of, tap } from 'rxjs'

import { AuthActions, AuthSelectors } from '@core/state'
import { AuthService } from '@core/services'

export const canActivateAuthorized: CanActivateFn = () => {
  const store = inject(Store)
  const router = inject(Router)
  const initialCheck = store.selectSnapshot(AuthSelectors.isInitialCheck)
  const isAuthenticated = store.selectSnapshot(AuthSelectors.isAuthenticated)
  const authService = inject(AuthService)

  if (initialCheck) {
    return authService.whoAmI().pipe(
      tap((response) => {
        store.dispatch(new AuthActions.InitialCheck({ username: response.username }))
      }),
      map((response) => Boolean(response.username)),
      catchError(() => {
        store.dispatch(new AuthActions.InitialCheck({}))
        router.navigate(['/login'])
        return of(false)
      }),
    )
  }

  if (!isAuthenticated) {
    router.navigate(['/login'])
  }

  return isAuthenticated
}
