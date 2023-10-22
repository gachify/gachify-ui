import { Injectable, inject } from '@angular/core'
import { Action, State, StateContext } from '@ngxs/store'
import { catchError, tap } from 'rxjs'
import { HttpErrorResponse } from '@angular/common/http'

import { RegistrationService } from '../services'
import { RegistrationActions } from './registration.actions'

import { AuthActions } from '@core/state'

export interface RegistrationStateModel {
  loading: boolean
  emailTaken: boolean
  usernameTaken: boolean
}

@State<RegistrationStateModel>({
  name: 'registration',
  defaults: {
    loading: false,
    emailTaken: false,
    usernameTaken: false,
  },
})
@Injectable()
export class RegistrationState {
  private readonly registrationService = inject(RegistrationService)

  @Action(RegistrationActions.Register)
  login(ctx: StateContext<RegistrationStateModel>, action: RegistrationActions.Register) {
    ctx.patchState({ loading: true })

    return this.registrationService.register(action.payload).pipe(
      tap((response) => {
        ctx.patchState({
          loading: false,
        })

        ctx.dispatch(new AuthActions.Login({ username: response.username }))
      }),
      catchError((error) => {
        ctx.patchState({
          loading: false,
        })
        return ctx.dispatch(new RegistrationActions.HandleError(error))
      }),
    )
  }

  @Action(RegistrationActions.HandleError)
  handleError(ctx: StateContext<RegistrationStateModel>, action: RegistrationActions.HandleError) {
    if (action.error.name === 'HttpErrorResponse') {
      const httpError = action.error as HttpErrorResponse

      if (httpError.status !== 400 || !httpError.error) {
        throw httpError
      }

      const { emailTaken, usernameTaken } = httpError.error

      ctx.patchState({ emailTaken, usernameTaken, loading: false })
    } else {
      throw action.error
    }
  }
}
