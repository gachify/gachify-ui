import { ChangeDetectionStrategy, Component, inject } from '@angular/core'
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms'
import { Store } from '@ngxs/store'

import { RegistrationActions, RegistrationSelectors } from '@features/registration/state'

@Component({
  selector: 'gachi-registration',
  templateUrl: 'registration.component.html',
  styleUrls: ['registration.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegistrationComponent {
  private readonly store = inject(Store)

  hide = true

  readonly isLoading$ = this.store.select(RegistrationSelectors.isLoading)
  readonly isEmailTaken$ = this.store.select(RegistrationSelectors.isEmailTaken)
  readonly isUsernameTaken$ = this.store.select(RegistrationSelectors.isUsernameTaken)

  form = new FormGroup({
    email: new FormControl('', [Validators.required, this.emailValidator]),
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
  })

  handleSubmit(): void {
    if (this.form.valid) {
      const username = this.form.controls.username.value || ''
      const email = this.form.controls.email.value || ''
      const password = this.form.controls.password.value || ''

      this.store.dispatch(new RegistrationActions.Register({ username, email, password }))
    } else {
      this.form.markAllAsTouched()
    }
  }

  private emailValidator(control: AbstractControl) {
    if (control.value) {
      const matches = control.value.match(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)

      return matches ? null : { email: true }
    }

    return null
  }
}
