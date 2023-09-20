import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'

import { BlankLayoutComponent, DefaultLayoutComponent } from './components'

import { SharedModule } from '@shared/shared.module'

@NgModule({
  imports: [CommonModule, RouterModule, SharedModule],
  declarations: [BlankLayoutComponent, DefaultLayoutComponent],
  exports: [BlankLayoutComponent, DefaultLayoutComponent],
})
export class LayoutsModule {}
