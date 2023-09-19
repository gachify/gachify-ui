import { NgModule } from '@angular/core'
import { RouterModule, Routes, TitleStrategy } from '@angular/router'

import { PageTitleStrategy } from '@core/strategies'
import { Layout } from '@layouts/models'

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/home/home-page.module').then((m) => m.HomePageModule),
    data: {
      layout: Layout.Default,
    },
    pathMatch: 'full',
  },
  { path: '**', redirectTo: '404', pathMatch: 'full' },
]

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
