import { ChangeDetectionStrategy, Component } from '@angular/core'

import { ImageSize, Remix } from '@core/models'

@Component({
  selector: 'gachi-playlist-details-remixes',
  templateUrl: './playlist-details-remixes.component.html',
  styleUrls: ['./playlist-details-remixes.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlaylistDetailsRemixesComponent {
  readonly remixes: Remix[] = [
    {
      id: '1',
      title: 'Король и Шут - Танец Злобного ♂Gay♂ния (Right Version)',
      artist: {
        id: '1',
        name: 'GachiMafia',
      },
      color: '#FF0000',
      images: [
        {
          url: 'https://yt3.googleusercontent.com/og3xm2GoRLvtqdxnIKzdWLDTHFBufaFKpW1t8Q7Vx0AHyU62twoLspAw4d-1FRdxNj1hSV_kkhM=s576',
          size: ImageSize.SMALL,
        },
        {
          url: 'https://yt3.googleusercontent.com/og3xm2GoRLvtqdxnIKzdWLDTHFBufaFKpW1t8Q7Vx0AHyU62twoLspAw4d-1FRdxNj1hSV_kkhM=s576',
          size: ImageSize.MEDIUM,
        },
      ],
      duration: 180,
    },
    {
      id: '2',
      title: 'Король и Шут - Танец Злобного ♂Gay♂ния (Right Version)',
      artist: {
        id: '1',
        name: 'GachiMafia',
      },
      color: '#FF0000',
      images: [
        {
          url: 'https://yt3.googleusercontent.com/og3xm2GoRLvtqdxnIKzdWLDTHFBufaFKpW1t8Q7Vx0AHyU62twoLspAw4d-1FRdxNj1hSV_kkhM=s576',
          size: ImageSize.SMALL,
        },
        {
          url: 'https://yt3.googleusercontent.com/og3xm2GoRLvtqdxnIKzdWLDTHFBufaFKpW1t8Q7Vx0AHyU62twoLspAw4d-1FRdxNj1hSV_kkhM=s576',
          size: ImageSize.MEDIUM,
        },
      ],
      duration: 180,
    },
  ]
}
