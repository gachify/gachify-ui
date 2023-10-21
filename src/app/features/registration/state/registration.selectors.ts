import { createSelector } from '@ngxs/store'

import { RegistrationState, RegistrationStateModel } from './registration.state'

export class LoginSelectors {
  static isLoading = createSelector([RegistrationState], (state: RegistrationStateModel) => state.loading)
}
