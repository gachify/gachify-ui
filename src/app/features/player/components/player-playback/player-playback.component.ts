import { ChangeDetectionStrategy, Component, inject } from '@angular/core'
import { toSignal } from '@angular/core/rxjs-interop'
import { Store } from '@ngxs/store'

import { AudioActions, AudioSelectors } from '@core/state'

@Component({
  selector: 'gachi-player-playback',
  templateUrl: 'player-playback.component.html',
  styleUrls: ['player-playback.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlayerPlaybackComponent {
  private readonly store = inject(Store)

  readonly duration = toSignal(this.store.select(AudioSelectors.duration))
  readonly currentTime = toSignal(this.store.select(AudioSelectors.currentTime))

  seek(event: Event) {
    const time = Number((event.target as HTMLInputElement).value)
    this.store.dispatch(new AudioActions.Seek({ time }))
  }

  pause() {
    this.store.dispatch(new AudioActions.Pause())
  }

  play() {
    this.store.dispatch(new AudioActions.Play())
  }
}
