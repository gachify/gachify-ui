import { NgModule } from '@angular/core'
import { NgxsModule } from '@ngxs/store'

import { SongsComponent, SongsUploadDialogComponent } from './components'
import { SongsState } from './state'
import { SongsService } from './services'

import { SharedModule } from '@shared/shared.module'

@NgModule({
  declarations: [SongsComponent, SongsUploadDialogComponent],
  imports: [NgxsModule.forFeature([SongsState]), SharedModule],
  providers: [SongsService],
  exports: [SongsComponent],
})
export class SongsModule {}
