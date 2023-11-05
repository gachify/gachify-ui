import { ChangeDetectionStrategy, Component, inject } from '@angular/core'
import { Store } from '@ngxs/store'

import { PlayerSelectors } from '@core/state'
import { environment } from '@environment'

@Component({
  selector: 'gachi-default-layout',
  templateUrl: 'default-layout.component.html',
  styleUrls: ['default-layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DefaultLayoutComponent {
  private readonly store = inject(Store)

  readonly isActive$ = this.store.select(PlayerSelectors.active)

  readonly applicationName = environment.applicationName
}
