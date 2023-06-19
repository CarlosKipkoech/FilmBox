import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { HttpClientModule } from '@angular/common/http';

import { SearchMoviePageRoutingModule } from './search-movie-routing.module';

import { SearchMoviePage } from './search-movie.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HttpClientModule,
    SearchMoviePageRoutingModule
  ],
  declarations: [SearchMoviePage]
})
export class SearchMoviePageModule {}
