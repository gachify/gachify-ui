import { NgModule } from '@angular/core'
import { RouterModule, Routes, TitleStrategy } from '@angular/router'

import { canActivateAuthorized, canActivateUnauthorized } from '@core/guards'
import { PageTitleStrategy } from '@core/strategies'
import { Layout } from '@layouts/models'

const routes: Routes = [
  {
    path: '',
    data: {
      layout: Layout.Default,
    },
    canActivate: [canActivateAuthorized],
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
      {
        path: 'explore',
        loadChildren: () => import('./pages/explore/explore-page.module').then((m) => m.ExplorePageModule),
      },
    ],
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login-page.module').then((m) => m.LoginPageModule),
    data: {
      layout: Layout.SideBanner,
    },
    canActivate: [canActivateUnauthorized],
  },
  {
    path: 'registration',
    loadChildren: () => import('./pages/registration/registration-page.module').then((m) => m.RegistrationPageModule),
    data: {
      layout: Layout.SideBanner,
    },
    canActivate: [canActivateUnauthorized],
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
