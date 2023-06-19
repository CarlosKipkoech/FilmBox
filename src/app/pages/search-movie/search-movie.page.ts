import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


interface MovieSearchResponse {
  Search: Movie[];
  totalResults: string;
  Response: string;
}

interface Movie {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

@Component({
  selector: 'app-search-movie',
  templateUrl: './search-movie.page.html',
  styleUrls: ['./search-movie.page.scss'],
})
export class SearchMoviePage implements OnInit {
  
  searchTerm: string = '';
  movies: any[] = [];
  

  constructor(private http: HttpClient) { }

 
  ngOnInit() {
  }

  searchMovies(searchTerm: string) {
    const apiUrl = `http://www.omdbapi.com?s=${searchTerm}&apikey=f91ddec1`;
    this.http.get<MovieSearchResponse>(apiUrl).subscribe((response: MovieSearchResponse) => {
      // Process the movie search results
      this.movies = response.Search;
      console.log(response.Search)
      // ...
    });
  }
}
