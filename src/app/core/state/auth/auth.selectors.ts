import { createSelector } from '@ngxs/store'

import { AuthState, AuthStateModel } from './auth.state'

export class AuthSelectors {
  static isAuthenticated = createSelector([AuthState], (state: AuthStateModel) => Boolean(state.authenticated))

  static isInitialCheck = createSelector([AuthState], (state: AuthStateModel) => state.initialCheck)
}
