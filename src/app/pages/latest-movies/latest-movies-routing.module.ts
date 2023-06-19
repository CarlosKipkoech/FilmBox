import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LatestMoviesPage } from './latest-movies.page';

const routes: Routes = [
  {
    path: '',
    component: LatestMoviesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LatestMoviesPageRoutingModule {}
