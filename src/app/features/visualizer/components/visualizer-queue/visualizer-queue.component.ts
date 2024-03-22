import { ChangeDetectionStrategy, Component, effect, inject } from '@angular/core'
import { DOCUMENT } from '@angular/common'

import { PlaybackState } from '@core/state'
import { Remix } from '@core/models'

@Component({
  selector: 'gachi-visualizer-queue',
  templateUrl: 'visualizer-queue.component.html',
  styleUrl: 'visualizer-queue.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VisualizerQueueComponent {
  private readonly playbackState = inject(PlaybackState)
  private readonly document = inject(DOCUMENT)

  readonly currentRemixId = this.playbackState.currentRemixId
  readonly queue = this.playbackState.queue

  constructor() {
    this.scrollToCurrentRemix()
  }

  private scrollToCurrentRemix(): void {
    effect(() => {
      const currentRemixId = this.currentRemixId()

      if (!currentRemixId) {
        return
      }

      const element = this.document.getElementById(currentRemixId)

      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'nearest' })
      }
    })
  }
}
