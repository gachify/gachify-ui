import { CommonModule } from '@angular/common'
import { NgModule, Optional, SkipSelf } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http'
import { NgxsModule } from '@ngxs/store'

import { EnsureModuleLoadedOnceGuard } from './guards'
import { AuthState, PlayerState, UserPlaylistsState } from './state'
import { WithCredentialsInterceptor } from './interceptors'

import { environment } from '@environment'

@NgModule({
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    NgxsModule.forRoot([AuthState, PlayerState, UserPlaylistsState], {
      developmentMode: !environment.production,
    }),
    CommonModule,
    HttpClientModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: WithCredentialsInterceptor,
      multi: true,
    },
    // {
    //   provide: IMAGE_LOADER,
    //   useValue: (config: ImageLoaderConfig) => `${environment.apiUrl}/media/${config.src}.png`,
    // },
  ],
})
export class CoreModule extends EnsureModuleLoadedOnceGuard {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    super(parentModule)
  }
}
