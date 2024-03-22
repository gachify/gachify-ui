import { Component, ChangeDetectionStrategy, inject } from '@angular/core'

import { ArtistDetailsState } from '@features/artist-details/state'

@Component({
  selector: 'gachi-artist-details-header',
  templateUrl: './artist-details-header.component.html',
  styleUrl: './artist-details-header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArtistDetailsHeaderComponent {
  private readonly artistDetailsState = inject(ArtistDetailsState)

  readonly artist = this.artistDetailsState.artist
}
