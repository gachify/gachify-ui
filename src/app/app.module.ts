import { NgModule } from '@angular/core'
import { HTTP_INTERCEPTORS } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'

import { CoreModule } from '@core/core.module'
import { LayoutsModule } from '@layouts/layouts.module'
import { SharedModule } from '@shared/shared.module'
import { WithCredentialsInterceptor } from '@core/interceptors'

@NgModule({
  declarations: [AppComponent],
  imports: [AppRoutingModule, CoreModule, LayoutsModule, SharedModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: WithCredentialsInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
