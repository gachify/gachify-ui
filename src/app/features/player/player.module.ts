import { NgModule } from '@angular/core'

import {
  PlayerComponent,
  PlayerControlsComponent,
  PlayerPlaybackComponent,
  PlayerSongComponent,
  PlayerVolumeComponent,
} from './components'

import { SharedModule } from '@shared/shared.module'

@NgModule({
  declarations: [
    PlayerComponent,
    PlayerControlsComponent,
    PlayerPlaybackComponent,
    PlayerSongComponent,
    PlayerVolumeComponent,
  ],
  imports: [SharedModule],
  exports: [PlayerComponent],
})
export class PlayerModule {}
