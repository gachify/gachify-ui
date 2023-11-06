import { ChangeDetectionStrategy, Component, inject } from '@angular/core'
import { toSignal } from '@angular/core/rxjs-interop'
import { Store } from '@ngxs/store'

import { AudioActions, AudioSelectors, PlaybackActions, PlaybackSelectors } from '@core/state'
import { RepeatOption } from '@core/models'

@Component({
  selector: 'gachi-player-controls',
  templateUrl: 'player-controls.component.html',
  styleUrls: ['player-controls.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlayerControlsComponent {
  private readonly store = inject(Store)

  readonly repeatOption = RepeatOption

  readonly repeat = toSignal(this.store.select(PlaybackSelectors.repeat))
  readonly shuffle = toSignal(this.store.select(PlaybackSelectors.shuffle))
  readonly status = toSignal(this.store.select(AudioSelectors.status))
  readonly hasNextSong = toSignal(this.store.select(PlaybackSelectors.hasNextSong))
  readonly hasPreviousSong = toSignal(this.store.select(PlaybackSelectors.hasPreviousSong))

  handleTogglePlay() {
    this.store.dispatch(new AudioActions.TogglePlay())
  }

  handleToggleRepeat() {
    this.store.dispatch(new PlaybackActions.ToggleRepeat())
  }

  handleSkipNext() {
    this.store.dispatch(new PlaybackActions.NextSong())
  }

  handleSkipPrevious() {
    this.store.dispatch(new PlaybackActions.PreviousSong())
  }

  handleToggleShuffle() {
    this.store.dispatch(new PlaybackActions.ToggleShuffle())
  }
}
