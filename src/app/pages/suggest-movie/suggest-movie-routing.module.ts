import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SuggestMoviePage } from './suggest-movie.page';

const routes: Routes = [
  {
    path: '',
    component: SuggestMoviePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SuggestMoviePageRoutingModule {}
