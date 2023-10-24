import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, computed, inject } from '@angular/core'

import { Song } from '@core/models'
import { AudioService } from '@core/services'

@Component({
  selector: 'gachi-song-list-item',
  templateUrl: 'song-list-item.component.html',
  styleUrls: ['song-list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SongsListItemComponent {
  private readonly audioService = inject(AudioService)

  @Input({ required: true }) song: Song

  @Output() handleSongClick = new EventEmitter<Song>()

  readonly currentSongId = computed(() => this.audioService.song()?.uuid)
}
