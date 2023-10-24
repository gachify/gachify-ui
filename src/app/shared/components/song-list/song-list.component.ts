import { ChangeDetectionStrategy, Component, Input, inject } from '@angular/core'

import { Playlist, Song } from '@core/models'
import { AudioService, PlaylistService } from '@core/services'

@Component({
  selector: 'gachi-song-list',
  templateUrl: 'song-list.component.html',
  styleUrls: ['song-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SongListComponent {
  private readonly audioService = inject(AudioService)
  private readonly playlistService = inject(PlaylistService)

  @Input() playlist?: Playlist
  @Input() songs?: Song[]

  readonly currentSong = this.audioService.song

  handleSongClick(song: Song) {
    if (this.playlist) {
      this.playlistService.load(this.playlist, song)
    } else {
      this.audioService.load(song)
    }
  }
}
