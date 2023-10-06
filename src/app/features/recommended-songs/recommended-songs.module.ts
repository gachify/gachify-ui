import { NgModule } from '@angular/core'
import { NgxsModule } from '@ngxs/store'

import { RecommendedSongsComponent } from './components'
import { RecommendedSongsService } from './services'
import { RecommendedSongsState } from './state'

import { SharedModule } from '@shared/shared.module'

@NgModule({
  declarations: [RecommendedSongsComponent],
  imports: [SharedModule, NgxsModule.forFeature([RecommendedSongsState])],
  providers: [RecommendedSongsService],
  exports: [RecommendedSongsComponent],
})
export class RecommendedSongsModule {}
