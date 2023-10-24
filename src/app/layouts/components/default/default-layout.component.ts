import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core'

import { AudioService } from '@core/services'
import { environment } from '@environment'

@Component({
  selector: 'gachi-default-layout',
  templateUrl: 'default-layout.component.html',
  styleUrls: ['default-layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DefaultLayoutComponent {
  private readonly audioService = inject(AudioService)

  readonly isPlayerVisible = computed(() => Boolean(this.audioService.song()))

  readonly applicationName = environment.applicationName
}
