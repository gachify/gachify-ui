import { NgModule } from '@angular/core'
import { NgxsModule } from '@ngxs/store'

import { UploadSongDialogComponent, UploadSongComponent } from './components'
import { UploadSongState } from './state'
import { UploadSongService } from './services'

import { SharedModule } from '@shared/shared.module'

@NgModule({
  declarations: [UploadSongComponent, UploadSongDialogComponent],
  imports: [NgxsModule.forFeature([UploadSongState]), SharedModule],
  providers: [UploadSongService],
  exports: [UploadSongComponent],
})
export class UploadSongModule {}
