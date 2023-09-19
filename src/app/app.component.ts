import { ChangeDetectionStrategy, Component } from '@angular/core'
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router'
import { Observable, filter, map, mergeMap } from 'rxjs'

import { asciiArt } from './app-intro-console'

import { Layout } from '@layouts/models'

@Component({
  selector: 'gachi-root',
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  readonly Layout = Layout
  readonly layout$ = this.getLayoutType$()

  constructor(
    private readonly router: Router,
    private readonly activatedRoute: ActivatedRoute,
  ) {
    console.log(asciiArt)
  }

  private getLayoutType$(): Observable<Layout> {
    return this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd),
      map(() => this.activatedRoute),
      map((route) => {
        while (route.firstChild) {
          route = route.firstChild
        }
        return route
      }),
      filter((route) => route.outlet === 'primary'),
      mergeMap((route) => route.data),
      map(({ layout }) => layout),
    )
  }
}
