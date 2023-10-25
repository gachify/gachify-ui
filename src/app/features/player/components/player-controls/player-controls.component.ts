import { ChangeDetectionStrategy, Component, inject } from '@angular/core'

import { PlaylistService } from '@core/services'
import { AudioService } from '@core/services/audio.service'

@Component({
  selector: 'gachi-player-controls',
  templateUrl: 'player-controls.component.html',
  styleUrls: ['player-controls.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlayerControlsComponent {
  private readonly audioService = inject(AudioService)
  private readonly playlistService = inject(PlaylistService)

  readonly playing = this.audioService.playing
  readonly sync = this.audioService.sync
  readonly repeat = this.audioService.repeat

  handleTogglePlay() {
    this.audioService.togglePlay()
  }

  handleToggleRepeat() {
    this.audioService.toggleRepeat()
  }

  handleSkipNext() {
    this.playlistService.nextTrack()
  }

  handleSkipPrevious() {
    this.playlistService.previousTrack()
  }
}
