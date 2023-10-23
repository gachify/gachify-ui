import { ChangeDetectionStrategy, Component, OnInit, computed, inject } from '@angular/core'
import { toSignal } from '@angular/core/rxjs-interop'
import { Store } from '@ngxs/store'

import { Song } from '@core/models'
import { AudioService } from '@core/services'
import { RecommendedSongsActions, RecommendedSongsSelectors } from '@features/recommended-songs/state'

@Component({
  selector: 'gachi-recommended-songs',
  templateUrl: 'recommended-songs.component.html',
  styleUrls: ['recommended-songs.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RecommendedSongsComponent implements OnInit {
  private readonly store = inject(Store)
  private readonly audioService = inject(AudioService)

  readonly currentSongId = computed(() => this.audioService.song()?.uuid)

  readonly loading = toSignal(this.store.select(RecommendedSongsSelectors.slices.loading))
  readonly songs = toSignal(this.store.select(RecommendedSongsSelectors.slices.songs))

  ngOnInit(): void {
    this.store.dispatch(new RecommendedSongsActions.Fetch())
  }

  handleSongClick(song: Song): void {
    this.audioService.load(song)
  }
}
