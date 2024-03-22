import { NgModule } from '@angular/core'

import { PlaylistDetailsComponent, PlaylistDetailsHeaderComponent, PlaylistDetailsRemixesComponent } from './components'

import { SharedModule } from '@shared/shared.module'

@NgModule({
  imports: [SharedModule],
  declarations: [PlaylistDetailsComponent, PlaylistDetailsHeaderComponent, PlaylistDetailsRemixesComponent],
  exports: [PlaylistDetailsComponent],
})
export class PlaylistDetailsModule {}
