import { ChangeDetectionStrategy, Component, inject } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'

import { LoginState } from '@features/login/state'

@Component({
  selector: 'gachi-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {
  private readonly loginState = inject(LoginState)

  readonly invalidCredentials = this.loginState.invalidCredentials
  readonly loading = this.loginState.loading

  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.minLength(3)]),
    password: new FormControl('', [Validators.required]),
  })

  handleSubmit(): void {
    if (this.form.valid) {
      const email = this.form.controls.email.value || ''
      const password = this.form.controls.password.value || ''

      this.loginState.login({ email, password })
    } else {
      this.form.markAllAsTouched()
    }
  }
}
