import { NgModule } from '@angular/core'

import { PlaylistDetailsPageComponent } from './playlist-details-page.component'
import { PlaylistDetailsPageRoutingModule } from './playlist-details-page-routing.module'

import { SharedModule } from '@shared/shared.module'
import { PlaylistDetailsModule } from '@features/playlist-details'

@NgModule({
  declarations: [PlaylistDetailsPageComponent],
  imports: [PlaylistDetailsModule, PlaylistDetailsPageRoutingModule, SharedModule],
})
export class PlaylistDetailsPageModule {}
