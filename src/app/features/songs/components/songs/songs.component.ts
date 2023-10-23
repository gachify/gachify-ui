import { ChangeDetectionStrategy, Component, OnInit, computed, inject } from '@angular/core'
import { toSignal } from '@angular/core/rxjs-interop'
import { Store } from '@ngxs/store'
import { PageEvent } from '@angular/material/paginator'
import { MatDialog } from '@angular/material/dialog'

import { SongsUploadDialogComponent } from '../'

import { Song } from '@core/models'
import { AudioService, PlaylistService } from '@core/services'
import { SongsActions, SongsSelectors } from '@features/songs/state'

@Component({
  selector: 'gachi-songs',
  templateUrl: 'songs.component.html',
  styleUrls: ['songs.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SongsComponent implements OnInit {
  private readonly store = inject(Store)
  private readonly audioService = inject(AudioService)
  private readonly playlistService = inject(PlaylistService)
  private readonly dialog = inject(MatDialog)

  readonly currentSongId = computed(() => this.audioService.song()?.uuid)

  readonly loading = toSignal(this.store.select(SongsSelectors.loading))
  readonly songs = toSignal(this.store.select(SongsSelectors.songs))
  readonly take = toSignal(this.store.select(SongsSelectors.take))
  readonly page = toSignal(this.store.select(SongsSelectors.page))
  readonly itemCount = toSignal(this.store.select(SongsSelectors.itemCount))
  readonly isFirstLoadComplete = toSignal(this.store.select(SongsSelectors.isFirstLoadComplete))

  ngOnInit(): void {
    this.store.dispatch(new SongsActions.Fetch())
  }

  handlePageEvent({ pageSize, pageIndex }: PageEvent) {
    this.store.dispatch(new SongsActions.UpdatePageOptions({ take: pageSize, page: pageIndex }))
  }

  handleAddSong() {
    this.dialog.open(SongsUploadDialogComponent, { maxWidth: 560, minWidth: 280 })
  }

  handleSongClick(song: Song) {
    // this.playlistService.load(, song)
    this.audioService.load(song)
  }
}
