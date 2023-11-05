import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'

import { BlankLayoutComponent, DefaultLayoutComponent, SideBannerLayoutComponent } from './components'

import { SharedModule } from '@shared/shared.module'
import { PlayerModule } from '@features/player'
import { PlaylistQuickPanelModule } from '@features/playlist-quick-panel'

@NgModule({
  imports: [CommonModule, PlayerModule, PlaylistQuickPanelModule, RouterModule, SharedModule],
  declarations: [BlankLayoutComponent, DefaultLayoutComponent, SideBannerLayoutComponent],
  exports: [BlankLayoutComponent, DefaultLayoutComponent, SideBannerLayoutComponent],
})
export class LayoutsModule {}
