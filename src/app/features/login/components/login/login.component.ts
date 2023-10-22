import { ChangeDetectionStrategy, Component, inject } from '@angular/core'
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms'
import { Store } from '@ngxs/store'

import { LoginActions, LoginSelectors } from '@features/login/state'

@Component({
  selector: 'gachi-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {
  private readonly store = inject(Store)

  readonly isInvalidCredentials$ = this.store.select(LoginSelectors.isInvalidCredentials)
  readonly isLoading$ = this.store.select(LoginSelectors.isLoading)

  form = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  })

  handleSubmit(): void {
    if (this.form.valid) {
      const username = this.form.controls.username.value || ''
      const password = this.form.controls.password.value || ''

      this.store.dispatch(new LoginActions.Login({ username, password }))
    } else {
      this.form.markAllAsTouched()
    }
  }
}
