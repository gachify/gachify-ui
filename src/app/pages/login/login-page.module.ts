import { NgModule } from '@angular/core'

import { LoginPageComponent } from './login-page.component'
import { LoginPageRoutingModule } from './login-page-routing.module'

import { SharedModule } from '@shared/shared.module'
import { LoginModule } from '@features/login'

@NgModule({
  declarations: [LoginPageComponent],
  imports: [LoginModule, LoginPageRoutingModule, SharedModule],
})
export class LoginPageModule {}
