import { NgModule } from '@angular/core'

import { SongsPageComponent } from './songs-page.component'
import { SongsPageRoutingModule } from './songs-page-routing.module'

import { SharedModule } from '@shared/shared.module'
import { SongsModule } from '@features/songs'
import { UploadSongModule } from '@features/upload-song'

@NgModule({
  declarations: [SongsPageComponent],
  imports: [SharedModule, SongsModule, SongsPageRoutingModule, UploadSongModule],
})
export class SongsPageModule {}
