import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomePage } from './home/home.page';

const routes: Routes = [

  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },


  {
    path: 'home',
    component: HomePage,
    children: [

      {
        path: 'home',
        loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
      },
    
      {
        path: 'latest-movies',
        loadChildren: () => import('./pages/latest-movies/latest-movies.module').then( m => m.LatestMoviesPageModule)
      },
      {
        path: 'search-movie',
        loadChildren: () => import('./pages/search-movie/search-movie.module').then( m => m.SearchMoviePageModule)
      },
      {
        path: 'suggest-movie',
        loadChildren: () => import('./pages/suggest-movie/suggest-movie.module').then( m => m.SuggestMoviePageModule)
      }
    ]
  },
 
 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
