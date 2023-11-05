import { ChangeDetectionStrategy, Component, inject } from '@angular/core'
import { toSignal } from '@angular/core/rxjs-interop'
import { Store } from '@ngxs/store'

import { PlayerActions, PlayerSelectors } from '@core/state'
import { RepeatOption } from '@core/models'

@Component({
  selector: 'gachi-player-controls',
  templateUrl: 'player-controls.component.html',
  styleUrls: ['player-controls.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlayerControlsComponent {
  private readonly store = inject(Store)

  readonly repeatOption = RepeatOption

  readonly repeat = toSignal(this.store.select(PlayerSelectors.repeat))
  readonly status = toSignal(this.store.select(PlayerSelectors.status))
  readonly playlist = toSignal(this.store.select(PlayerSelectors.playlist))

  handleTogglePlay() {
    this.store.dispatch(new PlayerActions.TogglePlay())
  }

  handleToggleRepeat() {
    this.store.dispatch(new PlayerActions.ToggleRepeat())
  }

  handleSkipNext() {
    this.store.dispatch(new PlayerActions.NextSong())
  }

  handleSkipPrevious() {
    this.store.dispatch(new PlayerActions.PreviousSong())
  }
}
