import { NgModule } from '@angular/core'

import { RecommendedSongsComponent } from './components'

import { SharedModule } from '@shared/shared.module'

@NgModule({
  declarations: [RecommendedSongsComponent],
  imports: [SharedModule],
  exports: [RecommendedSongsComponent],
})
export class RecommendedSongsModule {}
