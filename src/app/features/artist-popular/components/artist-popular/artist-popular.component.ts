import { ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core'

import { ArtistPopularState } from '@features/artist-popular/state'

@Component({
  selector: 'gachi-artist-popular',
  templateUrl: './artist-popular.component.html',
  styleUrl: './artist-popular.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArtistPopularComponent implements OnInit {
  private readonly artistPopularState = inject(ArtistPopularState)

  readonly artists = this.artistPopularState.data
  readonly loading = this.artistPopularState.loading

  ngOnInit(): void {
    this.artistPopularState.fetch()
  }

  numSequence(n: number): Array<number> {
    return Array(n)
  }
}
