import { NgModule } from '@angular/core'

import { RegistrationPageComponent } from './registration-page.component'
import { RegistrationPageRoutingModule } from './registration-page-routing.module'

import { SharedModule } from '@shared/shared.module'
import { RegistrationModule } from '@features/registration'

@NgModule({
  declarations: [RegistrationPageComponent],
  imports: [RegistrationModule, RegistrationPageRoutingModule, SharedModule],
})
export class RegistrationPageModule {}
