import { CommonModule } from '@angular/common'
import { NgModule, Optional, SkipSelf } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { HttpClientModule } from '@angular/common/http'
import { NgxsModule } from '@ngxs/store'

import { EnsureModuleLoadedOnceGuard } from './guards'

import { environment } from '@environment'

@NgModule({
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    NgxsModule.forRoot([], {
      developmentMode: !environment.production,
    }),
    CommonModule,
    HttpClientModule,
  ],
})
export class CoreModule extends EnsureModuleLoadedOnceGuard {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    super(parentModule)
  }
}
