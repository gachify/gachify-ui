import { NgModule } from '@angular/core'
import { NgxsModule } from '@ngxs/store'
import { RouterLink } from '@angular/router'

import { RegistrationComponent } from './components'
import { RegistrationService } from './services'
import { RegistrationState } from './state'

import { SharedModule } from '@shared/shared.module'

@NgModule({
  declarations: [RegistrationComponent],
  imports: [RouterLink, NgxsModule.forFeature([RegistrationState]), SharedModule],
  providers: [RegistrationService],
  exports: [RegistrationComponent],
})
export class RegistrationModule {}
