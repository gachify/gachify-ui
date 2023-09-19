import { NgModule } from '@angular/core'
import { MatButtonModule } from '@angular/material/button'
import { MatRippleModule } from '@angular/material/core'

import { HomePageComponent } from './home-page.component'
import { HomePageRoutingModule } from './home-page-routing.module'

@NgModule({
  declarations: [HomePageComponent],
  imports: [HomePageRoutingModule, MatButtonModule, MatRippleModule],
})
export class HomePageModule {}
