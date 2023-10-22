import { NgModule } from '@angular/core'

import { ExplorePageComponent } from './explore-page.component'
import { ExplorePageRoutingModule } from './explore-page-routing.module'

import { SharedModule } from '@shared/shared.module'

@NgModule({
  declarations: [ExplorePageComponent],
  imports: [ExplorePageRoutingModule, SharedModule],
})
export class ExplorePageModule {}
