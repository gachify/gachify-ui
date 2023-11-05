import { ChangeDetectionStrategy, Component, HostListener, Input, inject } from '@angular/core'
import { Router } from '@angular/router'

import { Playlist } from '@core/models'

@Component({
  selector: 'gachi-library-playlists-card',
  templateUrl: 'library-playlists-card.component.html',
  styleUrls: ['library-playlists-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LibraryPlaylistsCardComponent {
  private readonly router = inject(Router)

  @Input({ required: true }) playlist: Playlist

  @HostListener('click', ['$event.target'])
  handleClick(): void {
    this.router.navigate(['playlist/' + this.playlist.id])
  }

  get totalDuration(): number {
    return this.playlist.songs.reduce((sum, song) => sum + song.duration, 0)
  }

  get imageUrl(): string {
    return this.playlist.songs.length ? this.playlist.songs[0].id : '/assets/img/playlist-placeholder.png'
  }
}
