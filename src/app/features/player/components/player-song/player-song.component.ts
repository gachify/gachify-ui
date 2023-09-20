import { ChangeDetectionStrategy, Component, inject } from '@angular/core'

import { AudioService } from '@core/services/audio.service'

@Component({
  selector: 'gachi-player-song',
  templateUrl: 'player-song.component.html',
  styleUrls: ['player-song.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlayerSongComponent {
  private readonly audioService = inject(AudioService)

  song = this.audioService.song
}
