import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SuggestMoviePageRoutingModule } from './suggest-movie-routing.module';

import { SuggestMoviePage } from './suggest-movie.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SuggestMoviePageRoutingModule
  ],
  declarations: [SuggestMoviePage]
})
export class SuggestMoviePageModule {}
