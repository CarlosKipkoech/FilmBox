import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomePage } from './home/home.page';
import { LoginPage } from './pages/login/login.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule),
  },
  {
    path: 'home',
    component: HomePage,
    children: [
      {
        path: '',
        loadChildren: () => import('./home/home.module').then(m => m.HomePageModule),
      },
      {
        path: 'latest-movies',
        loadChildren: () => import('./pages/latest-movies/latest-movies.module').then(m => m.LatestMoviesPageModule),
      },
      {
        path: 'search-movie',
        loadChildren: () => import('./pages/search-movie/search-movie.module').then(m => m.SearchMoviePageModule),
      },
      {
        path: 'suggest-movie',
        loadChildren: () => import('./pages/suggest-movie/suggest-movie.module').then(m => m.SuggestMoviePageModule),
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
