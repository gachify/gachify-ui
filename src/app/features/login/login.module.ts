import { NgModule } from '@angular/core'
import { NgxsModule } from '@ngxs/store'
import { RouterLink } from '@angular/router'

import { LoginComponent } from './components'
import { LoginService } from './services'
import { LoginState } from './state'

import { SharedModule } from '@shared/shared.module'

@NgModule({
  declarations: [LoginComponent],
  imports: [RouterLink, NgxsModule.forFeature([LoginState]), SharedModule],
  providers: [LoginService],
  exports: [LoginComponent],
})
export class LoginModule {}
