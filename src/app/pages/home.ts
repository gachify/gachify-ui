// https://codepen.io/rachsmith/pen/BNKJme
import { ChangeDetectionStrategy, Component } from '@angular/core'

import { ArtistPopularModule } from '@features/artist-popular'
import { PlaylistRecommendedModule } from '@features/playlist-recommended'
import { SharedModule } from '@shared/shared.module'
import { RemixPopularModule } from '@features/remix-popular'
import { RemixNewReleasesModule } from '@features/remix-new-releases'

@Component({
  standalone: true,
  selector: 'gachi-home-page',
  template: `<gachi-playlist-recommended
      *isAuthenticated
    /><gachi-remix-new-releases /><gachi-remix-popular /><gachi-artist-popular />`,
  imports: [RemixPopularModule, ArtistPopularModule, PlaylistRecommendedModule, RemixNewReleasesModule, SharedModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePage {}
