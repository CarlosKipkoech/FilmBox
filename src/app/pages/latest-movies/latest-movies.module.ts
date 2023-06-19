import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { LatestMoviesPageRoutingModule } from './latest-movies-routing.module';
import { ApiService } from '../../services/api.service';

import { LatestMoviesPage } from './latest-movies.page';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LatestMoviesPageRoutingModule,
    HttpClientModule,
    
  ],
  declarations: [LatestMoviesPage],
  providers: [ApiService]
  
})
export class LatestMoviesPageModule {}
