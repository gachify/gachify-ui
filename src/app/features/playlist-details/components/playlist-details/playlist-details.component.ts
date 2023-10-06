import { ChangeDetectionStrategy, Component, Input, OnInit, inject } from '@angular/core'
import { Store } from '@ngxs/store'
import { toSignal } from '@angular/core/rxjs-interop'

import { PlaylistDetailsActions, PlaylistDetailsSelectors } from '@features/playlist-details/state'

@Component({
  selector: 'gachi-playlist-details',
  templateUrl: 'playlist-details.component.html',
  styleUrls: ['playlist-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlaylistDetailsComponent implements OnInit {
  private readonly store = inject(Store)

  @Input({ required: true }) id: string

  readonly loading = toSignal(this.store.select(PlaylistDetailsSelectors.slices.loading))
  readonly playlist = toSignal(this.store.select(PlaylistDetailsSelectors.slices.playlist))

  ngOnInit(): void {
    this.store.dispatch(new PlaylistDetailsActions.FetchById(this.id))
  }
}
