import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { SwahiliTranslatePipe } from 'src/app/pipes/swahili-translate.pipe';




@Component({
  selector: 'app-latest-movies',
  templateUrl: './latest-movies.page.html',
  styleUrls: ['./latest-movies.page.scss'],
  providers: [SwahiliTranslatePipe]
 
})
export class LatestMoviesPage implements OnInit {
  movies: any= [];
  noImagePath = 'assets/images/logo.png';
  currentPage = 1;
  moviesPerPage = 10;

  constructor(private apiService: ApiService) { }

  ngOnInit() {

   this.loadMovies();
  }


  loadMovies() {
    this.apiService.getUpcomingMovies(this.currentPage).subscribe((res) => {
      // Handle the response data
      this.movies.push(...res.results);
    });
  }


  
  loadMoreMovies(event:any) {
    this.currentPage++;
    this.apiService.getUpcomingMovies(this.currentPage).subscribe((data) => {
      // Append the new results to the existing results
      this.movies.push(...data.results);

      // Update the UI accordingly
  
      // Mark the infinite scroll as complete
      event.target.complete();
  
      // Disable the infinite scroll if there are no more results
      if (!data.next) {
        event.target.disabled = true;
      }
    });
  }

  

}
