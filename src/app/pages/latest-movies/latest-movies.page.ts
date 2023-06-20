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

   this.fetchMovies();
  }

  fetchMovies() {
    this.apiService.getUpcomingMovies().subscribe(
      (res) => {
        // Handle the retrieved data here
        this.movies.push(...res.results);
        this.getMoreMovies(res.next);
      },
      (error) => {
        // Handle any error that occurred
        console.error(error);
      }
    );
  }
  
  getMoreMovies(nextUrl: string | null) {
    if (nextUrl) {
      this.apiService.getMoreMovies(nextUrl).subscribe(
        (res) => {
          // Handle the retrieved data here
          this.movies.push(...res.results);
          this.getMoreMovies(res.next); // Call the function recursively
        },
        (error) => {
          // Handle any error that occurred
          console.error(error);
        }
      );
    }
  }

  

}
