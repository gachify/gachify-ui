import { NgModule } from '@angular/core'
import { NgxsModule } from '@ngxs/store'

import { PlaylistDetailsComponent, PlaylistDetailsHeaderComponent } from './components'
import { PlaylistDetailsState } from './state'

import { SharedModule } from '@shared/shared.module'

@NgModule({
  declarations: [PlaylistDetailsComponent, PlaylistDetailsHeaderComponent],
  imports: [SharedModule, NgxsModule.forFeature([PlaylistDetailsState])],
  exports: [PlaylistDetailsComponent],
})
export class PlaylistDetailsModule {}
