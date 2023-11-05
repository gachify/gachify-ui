import { ChangeDetectionStrategy, Component, inject } from '@angular/core'
import { MatDialog } from '@angular/material/dialog'

import { UploadSongDialogComponent } from '../upload-song-dialog/upload-song-dialog.component'

@Component({
  selector: 'gachi-upload-song',
  templateUrl: 'upload-song.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UploadSongComponent {
  private readonly dialog = inject(MatDialog)

  handleAddSong() {
    this.dialog.open(UploadSongDialogComponent, { width: '300px', disableClose: true })
  }
}
