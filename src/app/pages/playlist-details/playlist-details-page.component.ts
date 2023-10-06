import { Component, ChangeDetectionStrategy, Input } from '@angular/core'

@Component({
  selector: 'gachi-playlist-details-page',
  templateUrl: './playlist-details-page.component.html',
  styleUrls: ['./playlist-details-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlaylistDetailsPageComponent {
  @Input() id: string
}
