import { ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core'

import { AudioService } from '@core/services'
import { environment } from '@environment'

@Component({
  selector: 'gachi-default-layout',
  templateUrl: 'default-layout.component.html',
  styleUrls: ['default-layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DefaultLayoutComponent implements OnInit {
  readonly applicationName = environment.applicationName

  private readonly audioService = inject(AudioService)

  ngOnInit(): void {
    this.audioService.song.set({
      id: '2584a69c-f3c6-449d-951b-94223a743665',
      name: 'A мой мальчик едет на девятке',
      pictureUrl:
        'https://i.ytimg.com/vi/ql9TiOhGx0s/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLCT1YKUxp9ksY6iQgMYeA0XO-Oeaw',
      artist: {
        id: '',
        name: 'KuK',
      },
      duration: 218,
    })
  }
}
