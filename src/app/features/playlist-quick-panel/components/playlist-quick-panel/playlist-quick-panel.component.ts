import { ChangeDetectionStrategy, Component, inject } from '@angular/core'
import { Store } from '@ngxs/store'
import { toSignal } from '@angular/core/rxjs-interop'

import { Playlist, Song } from '@core/models'
import { PlayerSelectors, UserPlaylistsState } from '@core/state'

@Component({
  selector: 'gachi-playlist-quick-panel',
  templateUrl: 'playlist-quick-panel.component.html',
  styleUrls: ['playlist-quick-panel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlaylistQuickPanelComponent {
  private readonly store = inject(Store)

  readonly isLoading = toSignal(this.store.select(UserPlaylistsState.isLoading()))
  readonly playlists = toSignal(this.store.select(UserPlaylistsState.data<Playlist[]>()))

  readonly currentPlaylist = toSignal(this.store.select(PlayerSelectors.playlist))

  handleSongClick(song: Song): void {
    // this.playlistService.load(this.playlist()!, song)
  }
}
