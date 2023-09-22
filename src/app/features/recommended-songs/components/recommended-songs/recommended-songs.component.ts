import { ChangeDetectionStrategy, Component, inject } from '@angular/core'

import { AudioService } from '@core/services/audio.service'

@Component({
  selector: 'gachi-recommended-songs',
  templateUrl: 'recommended-songs.component.html',
  styleUrls: ['recommended-songs.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RecommendedSongsComponent {
  private readonly audioService = inject(AudioService)

  song = this.audioService.song
}
