import { createSelector } from '@ngxs/store'

import { LoginState, LoginStateModel } from './login.state'

export class LoginSelectors {
  static isInvalidCredentials = createSelector([LoginState], (state: LoginStateModel) => state.invalidCredentials)

  static isLoading = createSelector([LoginState], (state: LoginStateModel) => state.loading)
}
