import { Injectable, inject } from '@angular/core'
import { Action, State, StateContext } from '@ngxs/store'
import { catchError, tap } from 'rxjs'
import { HttpErrorResponse } from '@angular/common/http'

import { LoginService } from '../services'
import { LoginActions } from './login.actions'

export interface LoginStateModel {
  loading: boolean
  invalidCredentials: boolean
}

@State<LoginStateModel>({
  name: 'login',
  defaults: {
    loading: false,
    invalidCredentials: false,
  },
})
@Injectable()
export class LoginState {
  private readonly loginService = inject(LoginService)

  @Action(LoginActions.Login)
  login(ctx: StateContext<LoginStateModel>, action: LoginActions.Login) {
    ctx.patchState({ loading: true, invalidCredentials: false })

    return this.loginService.login(action.payload).pipe(
      tap(() => {
        ctx.patchState({
          loading: false,
        })
      }),
      catchError((error) => {
        ctx.patchState({
          loading: false,
        })
        return ctx.dispatch(new LoginActions.HandleError(error))
      }),
    )
  }

  @Action(LoginActions.HandleError)
  handleError(ctx: StateContext<LoginStateModel>, action: LoginActions.HandleError) {
    if (action.error.name === 'HttpErrorResponse' && (action.error as HttpErrorResponse).status === 401) {
      ctx.patchState({ invalidCredentials: true })
    } else {
      throw action.error
    }
  }
}
