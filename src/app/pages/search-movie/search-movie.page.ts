import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { debounceTime } from 'rxjs/operators';
import { Subject } from 'rxjs';



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
  
  searchTerm: Subject<string> = new Subject<string>();
  movies: any[] = [];
  isTyping: boolean = false;
  

  constructor(private http: HttpClient) { }

 
  ngOnInit() {

    this.searchTerm.pipe(debounceTime(300)).subscribe((searchTerm: string) => {
      this.searchMovies(searchTerm);

      
    });
  }

  searchMovies(searchTerm: string) {
    this.movies = []; // Clear previous results
  
    if (this.isTyping && searchTerm.trim() !== '') {
      // Show skeleton loader while loading
      this.movies = new Array(8).fill({});
  
      const apiUrl = `http://www.omdbapi.com?s=${searchTerm}&apikey=f91ddec1`;
      this.http.get<MovieSearchResponse>(apiUrl).subscribe((response: MovieSearchResponse) => {
        this.movies = response.Search;
        console.log(response.Search);
        // ...
      });
    }
  }
}
