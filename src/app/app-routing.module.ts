import { NgModule } from '@angular/core'
import { RouterModule, Routes, TitleStrategy } from '@angular/router'

import { PageTitleStrategy } from '@core/strategies'

const routes: Routes = []

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabledBlocking',
    }),
  ],
  providers: [
    {
      provide: TitleStrategy,
      useClass: PageTitleStrategy,
    },
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
