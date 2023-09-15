import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'

import { BlankLayoutComponent, DefaultLayoutComponent } from './components'

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [BlankLayoutComponent, DefaultLayoutComponent],
  exports: [BlankLayoutComponent, DefaultLayoutComponent],
})
export class LayoutsModule {}
