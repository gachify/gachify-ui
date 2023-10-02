import { NgModule } from '@angular/core'

import { RecommendedSongsComponent } from './components'
import { RecommendedSongsService } from './services'

import { SharedModule } from '@shared/shared.module'

@NgModule({
  declarations: [RecommendedSongsComponent],
  imports: [SharedModule],
  providers: [RecommendedSongsService],
  exports: [RecommendedSongsComponent],
})
export class RecommendedSongsModule {}
