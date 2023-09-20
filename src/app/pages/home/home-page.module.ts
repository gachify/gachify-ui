import { NgModule } from '@angular/core'
import { MatButtonModule } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon'
import { MatInputModule } from '@angular/material/input'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatSliderModule } from '@angular/material/slider'

import { HomePageComponent } from './home-page.component'
import { HomePageRoutingModule } from './home-page-routing.module'

@NgModule({
  declarations: [HomePageComponent],
  imports: [HomePageRoutingModule, MatButtonModule, MatFormFieldModule, MatIconModule, MatInputModule, MatSliderModule],
})
export class HomePageModule {}
