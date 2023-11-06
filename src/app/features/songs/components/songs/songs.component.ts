import { ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core'
import { toSignal } from '@angular/core/rxjs-interop'
import { Store } from '@ngxs/store'
import { PageEvent } from '@angular/material/paginator'
import { MatDialog } from '@angular/material/dialog'

import { Song } from '@core/models'
import { SongsActions, SongsSelectors } from '@features/songs/state'
import { PlaybackActions } from '@core/state'

@Component({
  selector: 'gachi-songs',
  templateUrl: 'songs.component.html',
  styleUrls: ['songs.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SongsComponent implements OnInit {
  private readonly store = inject(Store)
  private readonly dialog = inject(MatDialog)

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

  handleSongClick(song: Song) {
    this.store.dispatch(new PlaybackActions.Play({ song }))
  }
}
