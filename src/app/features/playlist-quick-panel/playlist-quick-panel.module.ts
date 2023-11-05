import { NgModule } from '@angular/core'

import { PlaylistQuickPanelComponent } from './components'

import { SharedModule } from '@shared/shared.module'

@NgModule({
  declarations: [PlaylistQuickPanelComponent],
  imports: [SharedModule],
  exports: [PlaylistQuickPanelComponent],
})
export class PlaylistQuickPanelModule {}
