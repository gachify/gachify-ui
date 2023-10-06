import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { PlaylistDetailsPageComponent } from './playlist-details-page.component'

const routes: Routes = [{ path: '', component: PlaylistDetailsPageComponent, title: 'Playlist' }]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlaylistDetailsPageRoutingModule {}
