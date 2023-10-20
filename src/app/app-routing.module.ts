import { NgModule } from '@angular/core'
import { RouterModule, Routes, TitleStrategy } from '@angular/router'

import { AuthGuard } from '@core/guards'
import { PageTitleStrategy } from '@core/strategies'
import { Layout } from '@layouts/models'

const routes: Routes = [
  {
    path: '',
    data: {
      layout: Layout.Default,
    },
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        loadChildren: () => import('./pages/home/home-page.module').then((m) => m.HomePageModule),
        pathMatch: 'full',
      },
      {
        path: 'library',
        loadChildren: () => import('./pages/library/library-page.module').then((m) => m.LibraryPageModule),
      },
      {
        path: 'playlist/:id',
        loadChildren: () =>
          import('./pages/playlist-details/playlist-details-page.module').then((m) => m.PlaylistDetailsPageModule),
      },
    ],
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/home/home-page.module').then((m) => m.HomePageModule),
  },
  {
    path: '404',
    loadChildren: () => import('./pages/not-found/not-found-page.module').then((m) => m.NotFoundPageModule),
    data: {
      layout: Layout.Blank,
    },
    pathMatch: 'full',
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: '404',
  },
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
