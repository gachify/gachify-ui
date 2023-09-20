import { NgModule } from '@angular/core'
import { MatButtonModule } from '@angular/material/button'

import { HomePageComponent } from './home-page.component'
import { HomePageRoutingModule } from './home-page-routing.module'

import { SharedModule } from '@shared/shared.module'
import { PlayerModule } from '@features/player'

@NgModule({
  declarations: [HomePageComponent],
  imports: [HomePageRoutingModule, MatButtonModule, PlayerModule, SharedModule],
})
export class HomePageModule {}
