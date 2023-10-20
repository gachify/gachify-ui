import { createSelector } from '@ngxs/store'

import { AuthState, AuthStateModel } from './auth.state'

export class AuthSelectors {
  static token = createSelector([AuthState], (state: AuthStateModel) => state.token)

  static isAuthenticated = createSelector([AuthState], (state: AuthStateModel) => Boolean(state.token))
}
