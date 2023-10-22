import { createSelector } from '@ngxs/store'

import { RegistrationState, RegistrationStateModel } from './registration.state'

export class RegistrationSelectors {
  static isLoading = createSelector([RegistrationState], (state: RegistrationStateModel) => state.loading)

  static isEmailTaken = createSelector([RegistrationState], (state: RegistrationStateModel) => state.emailTaken)

  static isUsernameTaken = createSelector([RegistrationState], (state: RegistrationStateModel) => state.usernameTaken)
}
