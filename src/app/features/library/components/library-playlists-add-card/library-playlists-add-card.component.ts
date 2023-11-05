import { ChangeDetectionStrategy, Component, HostListener, inject } from '@angular/core'
import { MatDialog } from '@angular/material/dialog'

import { LibraryPlaylistsAddDialogComponent } from '../library-playlists-add-dialog/library-playlists-add-dialog.component'

@Component({
  selector: 'gachi-library-playlists-add-card',
  templateUrl: 'library-playlists-add-card.component.html',
  styleUrls: ['library-playlists-add-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LibraryPlaylistsAddCardComponent {
  private readonly dialog = inject(MatDialog)

  @HostListener('click', ['$event.target'])
  handleClick(): void {
    this.dialog.open(LibraryPlaylistsAddDialogComponent, { width: '300px', disableClose: true })
  }
}
