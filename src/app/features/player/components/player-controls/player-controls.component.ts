import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core'

import { AudioService } from '@core/services/audio.service'

@Component({
  selector: 'gachi-player-controls',
  templateUrl: 'player-controls.component.html',
  styleUrls: ['player-controls.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlayerControlsComponent {
  private readonly audioService = inject(AudioService)
  // private readonly playlistService = inject(PlaylistService)

  readonly playing = this.audioService.playing
  readonly sync = this.audioService.sync

  handleTogglePlay() {
    this.audioService.togglePlay()
  }

  handleSkipNext() {
    // this.playlistService.nextTrack()
  }

  handleSkipPrevious() {
    // this.playlistService.previousTrack()
  }
}
