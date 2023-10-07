import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  HostBinding,
  HostListener,
  Input,
  Output,
} from '@angular/core'

import { Song } from '@core/models'

@Component({
  selector: 'gachi-playlist-details-list-item',
  templateUrl: 'playlist-details-list-item.component.html',
  styleUrls: ['playlist-details-list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlaylistDetailsListItemComponent {
  @Input({ required: true }) index: number
  @Input({ required: true }) song: Song

  @HostBinding('class.active')
  @Input()
  active = false

  @Output()
  handleClick = new EventEmitter<Song>()

  @HostListener('click', ['$event.target']) onClick() {
    this.handleClick.emit(this.song)
  }
}
