import { ChangeDetectionStrategy, Component, inject } from '@angular/core'

import { AudioService } from '@core/services/audio.service'

@Component({
  selector: 'gachi-player-volume',
  templateUrl: 'player-volume.component.html',
  styleUrls: ['player-volume.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlayerVolumeComponent {
  private readonly audioService = inject(AudioService)

  readonly muted = this.audioService.muted
  readonly volume = this.audioService.volume

  changeVolume(event: Event) {
    this.audioService.setVolume(Number((event.target as HTMLInputElement).value))
  }

  toggleMute() {
    this.audioService.toggleMute()
  }
}
