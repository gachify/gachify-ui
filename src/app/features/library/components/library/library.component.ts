import { ChangeDetectionStrategy, Component, signal } from '@angular/core'

enum Tabs {
  Playlists = 'playlists',
  Songs = 'songs',
  Artists = 'artists',
}

@Component({
  selector: 'gachi-library',
  templateUrl: 'library.component.html',
  styleUrls: ['library.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LibraryComponent {
  readonly activeTab = signal(Tabs.Playlists)

  readonly tabs = Tabs

  toggleTab(tab: Tabs): void {
    this.activeTab.set(tab)
  }
}
