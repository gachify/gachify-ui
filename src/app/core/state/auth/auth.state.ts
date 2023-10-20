import { Injectable, inject } from '@angular/core'
import { Action, Selector, State, StateContext } from '@ngxs/store'
import { tap } from 'rxjs'

import { AuthActions } from './auth.actions'

import { AuthService } from '@core/services'

export interface AuthStateModel {
  token: string | null
  username: string | null
}

@State<AuthStateModel>({
  name: 'auth',
  defaults: {
    token: null,
    username: null,
  },
})
@Injectable()
export class AuthState {
  private readonly authService = inject(AuthService)

  @Action(AuthActions.Login)
  login(ctx: StateContext<AuthStateModel>, action: AuthActions.Login) {
    return this.authService.login(action.payload).pipe(
      tap((result: { token: string }) => {
        ctx.patchState({
          token: result.token,
          username: action.payload.username,
        })
      }),
    )
  }

  @Action(AuthActions.Logout)
  logout(ctx: StateContext<AuthStateModel>) {
    const state = ctx.getState()
    return this.authService.logout(state.token).pipe(
      tap(() => {
        ctx.setState({
          token: null,
          username: null,
        })
      }),
    )
  }
}
