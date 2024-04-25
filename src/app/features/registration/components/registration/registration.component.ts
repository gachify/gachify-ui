import { ChangeDetectionStrategy, Component, inject } from '@angular/core'
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms'

import { RegistrationState } from '@features/registration/state'

@Component({
  selector: 'gachi-registration',
  templateUrl: 'registration.component.html',
  styleUrls: ['registration.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegistrationComponent {
  private readonly registrationState = inject(RegistrationState)

  hide = true

  readonly loading = this.registrationState.loading
  readonly emailTaken = this.registrationState.emailTaken
  readonly usernameTaken = this.registrationState.usernameTaken

  form = new FormGroup({
    email: new FormControl('', [Validators.required, this.emailValidator]),
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
  })

  handleSubmit(): void {
    if (this.form.valid) {
      const username = this.form.controls.username.value ?? ''
      const email = this.form.controls.email.value ?? ''
      const password = this.form.controls.password.value ?? ''

      this.registrationState.register({ username, email, password })
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
