import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { LibraryPageComponent } from './library-page.component'

const routes: Routes = [{ path: '', component: LibraryPageComponent, title: 'Library' }]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LibraryPageRoutingModule {}
