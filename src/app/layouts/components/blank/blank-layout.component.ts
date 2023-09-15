import { ChangeDetectionStrategy, Component } from '@angular/core'

@Component({
  selector: 'gachi-blank-layout',
  templateUrl: 'blank-layout.component.html',
  styleUrls: ['blank-layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BlankLayoutComponent {}
