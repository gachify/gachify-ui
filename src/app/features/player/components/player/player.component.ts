import { ChangeDetectionStrategy, Component, inject } from '@angular/core'
import { Store } from '@ngxs/store'

import { PlayerSelectors } from '@core/state'

@Component({
  selector: 'gachi-player',
  templateUrl: 'player.component.html',
  styleUrls: ['player.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlayerComponent {
  private readonly store = inject(Store)

  readonly isActive$ = this.store.select(PlayerSelectors.active)
}
