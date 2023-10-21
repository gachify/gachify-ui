import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { RegistrationPageComponent } from './registration-page.component'

const routes: Routes = [{ path: '', component: RegistrationPageComponent, title: 'Registration' }]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistrationPageRoutingModule {}
