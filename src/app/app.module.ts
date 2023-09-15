import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'

import { CoreModule } from '@core/core.module'
import { LayoutsModule } from '@layouts/layouts.module'
import { SharedModule } from '@shared/shared.module'

@NgModule({
  declarations: [AppComponent],
  imports: [AppRoutingModule, BrowserModule, CoreModule, LayoutsModule, SharedModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
