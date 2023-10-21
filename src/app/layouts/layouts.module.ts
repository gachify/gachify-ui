import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'

import { BlankLayoutComponent, DefaultLayoutComponent, SideBannerLayoutComponent } from './components'

import { SharedModule } from '@shared/shared.module'
import { PlayerModule } from '@features/player'

@NgModule({
  imports: [CommonModule, PlayerModule, RouterModule, SharedModule],
  declarations: [BlankLayoutComponent, DefaultLayoutComponent, SideBannerLayoutComponent],
  exports: [BlankLayoutComponent, DefaultLayoutComponent, SideBannerLayoutComponent],
})
export class LayoutsModule {}
