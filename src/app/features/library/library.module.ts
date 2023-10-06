import { NgModule } from '@angular/core'
import { NgxsModule } from '@ngxs/store'

import { LibraryPlaylistsService } from './services'
import { LibraryComponent, LibraryPlaylistsCardComponent, LibraryPlaylistsComponent } from './components'
import { LibraryState } from './state'

import { SharedModule } from '@shared/shared.module'

@NgModule({
  declarations: [LibraryComponent, LibraryPlaylistsCardComponent, LibraryPlaylistsComponent],
  imports: [SharedModule, NgxsModule.forFeature([LibraryState])],
  providers: [LibraryPlaylistsService],
  exports: [LibraryComponent],
})
export class LibraryModule {}
