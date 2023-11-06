import { NgModule } from '@angular/core'
import { RouterLink } from '@angular/router'

import { PlaylistQuickPanelComponent } from './components'

import { SharedModule } from '@shared/shared.module'

@NgModule({
  declarations: [PlaylistQuickPanelComponent],
  imports: [RouterLink, SharedModule],
  exports: [PlaylistQuickPanelComponent],
})
export class PlaylistQuickPanelModule {}
