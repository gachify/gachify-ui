import { ChangeDetectionStrategy, Component } from '@angular/core'

import { RemixListModule } from '@features/remix-list/remix-list.module'

@Component({
  standalone: true,
  selector: 'gachi-remixes-page',
  template: '<gachi-remix-list />',
  imports: [RemixListModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RemixesPage {}
