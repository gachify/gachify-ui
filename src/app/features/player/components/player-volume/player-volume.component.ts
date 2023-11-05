import { ChangeDetectionStrategy, Component, inject } from '@angular/core'
import { Store } from '@ngxs/store'
import { toSignal } from '@angular/core/rxjs-interop'

import { PlayerActions, PlayerSelectors } from '@core/state'

@Component({
  selector: 'gachi-player-volume',
  templateUrl: 'player-volume.component.html',
  styleUrls: ['player-volume.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlayerVolumeComponent {
  private readonly store = inject(Store)

  readonly muted = toSignal(this.store.select(PlayerSelectors.muted))
  readonly volume = toSignal(this.store.select(PlayerSelectors.volume))

  changeVolume(event: Event) {
    const volume = Number((event.target as HTMLInputElement).value)
    this.store.dispatch(new PlayerActions.SetVolume({ volume }))
  }

  toggleMute() {
    this.store.dispatch(new PlayerActions.ToggleMute())
  }
}
