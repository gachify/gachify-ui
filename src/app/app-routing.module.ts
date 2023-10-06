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
  {
    path: 'library',
    loadChildren: () => import('./pages/library/library-page.module').then((m) => m.LibraryPageModule),
    data: {
      layout: Layout.Default,
    },
  },
  {
    path: 'playlist/:id',
    loadChildren: () =>
      import('./pages/playlist-details/playlist-details-page.module').then((m) => m.PlaylistDetailsPageModule),
    data: {
      layout: Layout.Default,
    },
  },
  { path: '**', redirectTo: '404', pathMatch: 'full' },
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabledBlocking',
      bindToComponentInputs: true,
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
