import { ChangeDetectionStrategy, Component, Input } from '@angular/core'

import { Playlist } from '@core/models'

@Component({
  selector: 'gachi-playlist-details-header',
  templateUrl: 'playlist-details-header.component.html',
  styleUrls: ['playlist-details-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlaylistDetailsHeaderComponent {
  @Input({ required: true }) playlist: Playlist

  get totalDuration(): number {
    return this.playlist.songs.reduce((sum, song) => sum + song.duration, 0)
  }
}
