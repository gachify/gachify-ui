import { ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core'

import { SsoState } from '../../state'

@Component({
  selector: 'gachi-sso',
  templateUrl: 'sso.component.html',
  styleUrls: ['sso.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SsoComponent implements OnInit {
  private readonly ssoState = inject(SsoState)

  ngOnInit() {
    // this.ssoState.whoami()
  }
}
