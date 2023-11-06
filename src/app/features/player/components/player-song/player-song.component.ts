import { ChangeDetectionStrategy, Component, inject } from '@angular/core'
import { Store } from '@ngxs/store'
import { toSignal } from '@angular/core/rxjs-interop'

import { environment } from '@environment'
import { PlaybackSelectors } from '@core/state'

@Component({
  selector: 'gachi-player-song',
  templateUrl: 'player-song.component.html',
  styleUrls: ['player-song.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlayerSongComponent {
  private readonly store = inject(Store)

  readonly song = toSignal(this.store.select(PlaybackSelectors.currentSong))

  get imageUrl(): string {
    return `${environment.apiUrl}/media/${this.song()?.id}_x56.png`
  }
}
