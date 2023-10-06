import { NgModule } from '@angular/core'

import { LibraryPageRoutingModule } from './library-page-routing.module'
import { LibraryPageComponent } from './library-page.component'

import { SharedModule } from '@shared/shared.module'
import { LibraryModule } from '@features/library'

@NgModule({
  declarations: [LibraryPageComponent],
  imports: [LibraryModule, LibraryPageRoutingModule, SharedModule],
})
export class LibraryPageModule {}
