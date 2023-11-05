import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, Output } from '@angular/core'

import { NgChanges, PlayerStatus } from '@core/models'

@Component({
  selector: 'gachi-play-button',
  templateUrl: 'play-button.component.html',
  styleUrls: ['play-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlayButtonComponent implements OnChanges {
  @Input({ required: true }) status: PlayerStatus

  @Output() togglePlay = new EventEmitter()

  icon = ''

  ngOnChanges({ status }: NgChanges<PlayButtonComponent>): void {
    if (status) {
      switch (status.currentValue) {
        case PlayerStatus.Playing:
          this.icon = 'pause'
          break
        case PlayerStatus.Paused:
          this.icon = 'play_arrow'
          break
        default:
          break
      }
    }
  }
}
