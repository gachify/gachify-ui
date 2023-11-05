import { NgModule } from '@angular/core'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'

import { CoreModule } from '@core/core.module'
import { LayoutsModule } from '@layouts/layouts.module'
import { SharedModule } from '@shared/shared.module'

@NgModule({
  declarations: [AppComponent],
  imports: [AppRoutingModule, CoreModule, LayoutsModule, SharedModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

// Sidebar - list of user`s playlists
// Sidebar - add playlist -> update user`s playlists
// Library user's playlists
// Player - current playlist with songs
// Song card - add to user`s playlist / create new user`s playlist and add song
