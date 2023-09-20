import { ChangeDetectionStrategy, Component, inject } from '@angular/core'

import { AudioService } from '@core/services/audio.service'

@Component({
  selector: 'gachi-player',
  templateUrl: 'player.component.html',
  styleUrls: ['player.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlayerComponent {
  private readonly audioService = inject(AudioService)

  song = this.audioService.song
}
