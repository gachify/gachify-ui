import { ChangeDetectionStrategy, Component, OnInit, computed, inject } from '@angular/core'
import { toSignal } from '@angular/core/rxjs-interop'
import { Store } from '@ngxs/store'

import { LibraryActions, LibrarySelectors } from '@features/library/state'

@Component({
  selector: 'gachi-library-playlists',
  templateUrl: 'library-playlists.component.html',
  styleUrls: ['library-playlists.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LibraryPlaylistsComponent implements OnInit {
  private readonly store = inject(Store)

  readonly loading = toSignal(this.store.select(LibrarySelectors.slices.loading))
  readonly playlists = toSignal(this.store.select(LibrarySelectors.slices.playlists))
  readonly isEmpty = computed(() => Boolean(this.playlists()?.length))

  ngOnInit(): void {
    this.store.dispatch(new LibraryActions.FetchPlaylists())
  }
}
