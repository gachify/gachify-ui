import { NgModule } from '@angular/core'

import { NotFoundPageComponent } from './not-found-page.component'
import { NotFoundPageRoutingModule } from './not-found-page-routing.module'

import { SharedModule } from '@shared/shared.module'

@NgModule({
  declarations: [NotFoundPageComponent],
  imports: [NotFoundPageRoutingModule, SharedModule],
})
export class NotFoundPageModule {}
