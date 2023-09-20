import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { MatIconModule } from '@angular/material/icon'

import { BlankLayoutComponent, DefaultLayoutComponent } from './components'

import { SharedModule } from '@shared/shared.module'

@NgModule({
  imports: [CommonModule, MatIconModule, RouterModule, SharedModule],
  declarations: [BlankLayoutComponent, DefaultLayoutComponent],
  exports: [BlankLayoutComponent, DefaultLayoutComponent],
})
export class LayoutsModule {}
