import { NgModule } from '@angular/core'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'

import { CoreModule } from '@core/core.module'
import { LayoutsModule } from '@layouts/layouts.module'
import { SharedModule } from '@shared/shared.module'

@NgModule({
  declarations: [AppComponent],
  imports: [AppRoutingModule, CoreModule, LayoutsModule, SharedModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
