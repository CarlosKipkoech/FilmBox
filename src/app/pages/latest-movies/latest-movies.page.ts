import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';



@Component({
  selector: 'app-latest-movies',
  templateUrl: './latest-movies.page.html',
  styleUrls: ['./latest-movies.page.scss'],
})
export class LatestMoviesPage implements OnInit {
  movies: any= [];

  constructor(private apiService: ApiService) { }

  ngOnInit() {

   this.fetchMovies();
  }

  fetchMovies() {
    this.apiService.getUpcomingMovies().subscribe(
      (res) => {
        // Handle the retrieved data here
        this.movies.push(...res.results)
       
      },
      (error) => {
        // Handle any error that occurred
        console.error(error);
      }
    );
  }

}
