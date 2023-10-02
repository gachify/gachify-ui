import { ChangeDetectionStrategy, Component, inject } from '@angular/core'

import { Song } from '@core/models'
import { AudioService } from '@core/services'
import { RecommendedSongsService } from '@features/recommended-songs/services'

@Component({
  selector: 'gachi-recommended-songs',
  templateUrl: 'recommended-songs.component.html',
  styleUrls: ['recommended-songs.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RecommendedSongsComponent {
  private readonly recommendedSongsService = inject(RecommendedSongsService)
  private readonly audioService = inject(AudioService)

  readonly loading = this.recommendedSongsService.loading

  readonly songs = this.recommendedSongsService.songs

  handleSongClick(song: Song): void {
    this.audioService.song.set(song)
  }
}
