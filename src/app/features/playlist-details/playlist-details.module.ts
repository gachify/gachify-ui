import { NgModule } from '@angular/core'
import { NgxsModule } from '@ngxs/store'

import {
  PlaylistDetailsComponent,
  PlaylistDetailsHeaderComponent,
  PlaylistDetailsListComponent,
  PlaylistDetailsListItemComponent,
} from './components'
import { PlaylistDetailsService } from './services'
import { PlaylistDetailsState } from './state'

import { SharedModule } from '@shared/shared.module'

@NgModule({
  declarations: [
    PlaylistDetailsComponent,
    PlaylistDetailsHeaderComponent,
    PlaylistDetailsListComponent,
    PlaylistDetailsListItemComponent,
  ],
  imports: [SharedModule, NgxsModule.forFeature([PlaylistDetailsState])],
  providers: [PlaylistDetailsService],
  exports: [PlaylistDetailsComponent],
})
export class PlaylistDetailsModule {}
