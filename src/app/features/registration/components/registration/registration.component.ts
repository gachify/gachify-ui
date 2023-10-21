import { ChangeDetectionStrategy, Component, inject } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { Store } from '@ngxs/store'

import { RegistrationActions } from '@features/registration/state'

@Component({
  selector: 'gachi-registration',
  templateUrl: 'registration.component.html',
  styleUrls: ['registration.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegistrationComponent {
  private readonly store = inject(Store)

  hide = true

  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
  })

  handleSubmit(): void {
    if (this.form.valid) {
      const username = this.form.controls.username.value || ''
      const password = this.form.controls.password.value || ''

      this.store.dispatch(new RegistrationActions.Register({ username, password }))
    } else {
      this.form.markAllAsTouched()
    }
  }
}
