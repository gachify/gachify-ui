import { Injectable, inject } from '@angular/core'
import { Action, State, StateContext } from '@ngxs/store'
import { Router } from '@angular/router'

import { AuthActions } from './auth.actions'

export interface AuthStateModel {
  initialCheck: boolean
  authenticated: boolean
  username: string | null
}

@State<AuthStateModel>({
  name: 'auth',
  defaults: {
    initialCheck: true,
    authenticated: false,
    username: null,
  },
})
@Injectable()
export class AuthState {
  private readonly router = inject(Router)

  @Action(AuthActions.Login)
  login(ctx: StateContext<AuthStateModel>, action: AuthActions.Login) {
    ctx.patchState({ username: action.payload.username, authenticated: true })

    this.router.navigate(['/'])
  }

  @Action(AuthActions.InitialCheck)
  whoAmI(ctx: StateContext<AuthStateModel>, action: AuthActions.InitialCheck) {
    const username = action.payload.username
    if (username) {
      ctx.patchState({ username, initialCheck: false, authenticated: true })
    } else {
      ctx.patchState({ initialCheck: false, authenticated: false })
    }
  }

  @Action(AuthActions.Logout)
  logout(ctx: StateContext<AuthStateModel>) {
    ctx.patchState({
      username: null,
      authenticated: false,
    })
    this.router.navigate(['/login'])
  }
}
