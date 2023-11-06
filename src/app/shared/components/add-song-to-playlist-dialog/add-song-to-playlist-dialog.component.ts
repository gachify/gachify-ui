import { ChangeDetectionStrategy, Component, inject } from '@angular/core'
import { toSignal } from '@angular/core/rxjs-interop'
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog'
import { Store } from '@ngxs/store'

import { Playlist, Song } from '@core/models'
import { UserPlaylistsState } from '@core/state'
import { PlaylistService } from '@core/services'

export interface AddSongToPlaylistDialogData {
  song: Song
}

@Component({
  selector: 'gachi-add-song-to-playlist-dialog',
  templateUrl: 'add-song-to-playlist-dialog.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddSongToPlaylistDialogComponent {
  private readonly store = inject(Store)
  private readonly playlistService = inject(PlaylistService)
  readonly dialogRef = inject(MatDialogRef<AddSongToPlaylistDialogComponent>)
  readonly data: AddSongToPlaylistDialogData = inject(MAT_DIALOG_DATA)

  readonly playlists = toSignal(this.store.select(UserPlaylistsState.data<Playlist[]>()))

  handleAddSongToPlaylist(playlistId: string): void {
    this.playlistService.addSong(playlistId, this.data.song.id).subscribe()
    this.dialogRef.close()
  }
}
