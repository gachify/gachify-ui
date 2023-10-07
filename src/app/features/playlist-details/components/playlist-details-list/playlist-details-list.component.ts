import { ChangeDetectionStrategy, Component, Input, inject } from '@angular/core'

import { Playlist, Song } from '@core/models'
import { AudioService, PlaylistService } from '@core/services'

@Component({
  selector: 'gachi-playlist-details-list',
  templateUrl: 'playlist-details-list.component.html',
  styleUrls: ['playlist-details-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlaylistDetailsListComponent {
  private readonly audioService = inject(AudioService)
  private readonly playlistService = inject(PlaylistService)

  @Input({ required: true }) playlist: Playlist

  readonly currentSong = this.audioService.song

  handleSongClick(song: Song) {
    this.playlistService.load(this.playlist, song)
  }
}
