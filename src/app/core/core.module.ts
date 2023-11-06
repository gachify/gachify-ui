import { CommonModule } from '@angular/common'
import { NgModule, Optional, SkipSelf } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http'
import { NgxsModule } from '@ngxs/store'

import { EnsureModuleLoadedOnceGuard } from './guards'
import { AudioState, AuthState, PlaybackState, UserPlaylistsState } from './state'
import { WithCredentialsInterceptor } from './interceptors'

import { environment } from '@environment'

@NgModule({
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    NgxsModule.forRoot([AuthState, AudioState, PlaybackState, UserPlaylistsState], {
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
  ],
})
export class CoreModule extends EnsureModuleLoadedOnceGuard {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    super(parentModule)
  }
}
