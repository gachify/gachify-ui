import { ChangeDetectionStrategy, Component } from '@angular/core'

import { environment } from '@environment'

@Component({
  selector: 'gachi-default-layout',
  templateUrl: 'default-layout.component.html',
  styleUrls: ['default-layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DefaultLayoutComponent {
  readonly applicationName = environment.applicationName
}
