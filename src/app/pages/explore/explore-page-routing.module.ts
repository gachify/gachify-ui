import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { ExplorePageComponent } from './explore-page.component'

const routes: Routes = [{ path: '', component: ExplorePageComponent, title: 'Explore' }]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExplorePageRoutingModule {}
