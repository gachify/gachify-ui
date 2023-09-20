import { ChangeDetectionStrategy, Component, inject } from '@angular/core'

import { AudioService } from '@core/services/audio.service'

@Component({
  selector: 'gachi-player-playback',
  templateUrl: 'player-playback.component.html',
  styleUrls: ['player-playback.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlayerPlaybackComponent {
  private readonly audioService = inject(AudioService)

  readonly duration = this.audioService.duration
  readonly currentTime = this.audioService.currentTime

  seek(event: Event) {
    this.audioService.seek(Number((event.target as HTMLInputElement).value))
  }

  pause() {
    this.audioService.pause()
  }

  play() {
    this.audioService.play()
  }
}
