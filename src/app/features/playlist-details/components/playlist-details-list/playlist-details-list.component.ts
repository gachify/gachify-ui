import { ChangeDetectionStrategy, Component, Input } from '@angular/core'

import { Playlist } from '@core/models'

@Component({
  selector: 'gachi-playlist-details-list',
  templateUrl: 'playlist-details-list.component.html',
  styleUrls: ['playlist-details-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlaylistDetailsListComponent {
  @Input({ required: true }) playlist: Playlist
}
