import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild,
  computed,
  inject,
} from '@angular/core'
import { toSignal } from '@angular/core/rxjs-interop'
import { Store } from '@ngxs/store'
import { MatMenuTrigger } from '@angular/material/menu'
import { MatDialog } from '@angular/material/dialog'

import { AddSongToPlaylistDialogComponent } from '../add-song-to-playlist-dialog/add-song-to-playlist-dialog.component'

import { Song } from '@core/models'
import { environment } from '@environment'
import { AudioSelectors, PlaybackSelectors } from '@core/state'

@Component({
  selector: 'gachi-song-list-item',
  templateUrl: 'song-list-item.component.html',
  styleUrls: ['song-list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SongsListItemComponent {
  private readonly store = inject(Store)
  private readonly dialog = inject(MatDialog)

  @Input({ required: true }) song: Song

  @Output() handleSongClick = new EventEmitter<Song>()

  @ViewChild('menuTrigger') menuTrigger: MatMenuTrigger

  readonly status = toSignal(this.store.select(AudioSelectors.status))
  readonly currentSong = toSignal(this.store.select(PlaybackSelectors.currentSong))

  readonly isCurrentSong = computed(() => this.currentSong()?.id === this.song.id)

  get imageUrl(): string {
    return `${environment.apiUrl}/media/${this.song.id}_x56.png`
  }

  openMenu(event: Event) {
    event.stopImmediatePropagation()
    this.menuTrigger.openMenu()
  }

  handleAddToPlaylist(): void {
    this.dialog.open(AddSongToPlaylistDialogComponent, { maxWidth: 560, minWidth: 320, data: { song: this.song } })
  }
}
