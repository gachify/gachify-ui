import { NgModule } from '@angular/core'
import { NgxsModule } from '@ngxs/store'

import { SongsComponent } from './components'
import { SongsState } from './state'

import { SharedModule } from '@shared/shared.module'

@NgModule({
  declarations: [SongsComponent],
  imports: [NgxsModule.forFeature([SongsState]), SharedModule],
  exports: [SongsComponent],
})
export class SongsModule {}
