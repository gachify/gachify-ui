import { NgModule } from '@angular/core'
import { MatButtonModule } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon'
import { MatInputModule } from '@angular/material/input'
import { MatFormFieldModule } from '@angular/material/form-field'

import { HomePageComponent } from './home-page.component'
import { HomePageRoutingModule } from './home-page-routing.module'

@NgModule({
  declarations: [HomePageComponent],
  imports: [HomePageRoutingModule, MatButtonModule, MatFormFieldModule, MatIconModule, MatInputModule],
})
export class HomePageModule {}
