import { NgModule } from '@angular/core'
import { RouterLink } from '@angular/router'

import { InviteComponent } from './components'

import { SharedModule } from '@shared/shared.module'

@NgModule({
  declarations: [InviteComponent],
  imports: [RouterLink, SharedModule],
  providers: [],
  exports: [InviteComponent],
})
export class InviteModule {}
