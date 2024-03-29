import { NgModule } from '@angular/core'

import {
  PlayerComponent,
  PlayerControlsComponent,
  PlayerPlaybackComponent,
  PlayerSongComponent,
  PlayerVisualizerComponent,
  PlayerVolumeComponent,
} from './components'

import { SharedModule } from '@shared/shared.module'

@NgModule({
  imports: [SharedModule],
  declarations: [
    PlayerComponent,
    PlayerControlsComponent,
    PlayerPlaybackComponent,
    PlayerSongComponent,
    PlayerVisualizerComponent,
    PlayerVolumeComponent,
  ],
  providers: [],
  exports: [PlayerComponent],
})
export class PlayerModule {}
