import { Injectable, inject } from '@angular/core'
import { State } from '@ngxs/store'

import { RegistrationService } from '../services'

export interface RegistrationStateModel {
  loading: boolean
}

@State<RegistrationStateModel>({
  name: 'registration',
  defaults: {
    loading: false,
  },
})
@Injectable()
export class RegistrationState {
  private readonly registrationService = inject(RegistrationService)
}
