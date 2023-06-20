import { Component, OnInit,ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { debounceTime } from 'rxjs/operators';
import { Subject, BehaviorSubject } from 'rxjs';
import { IonInfiniteScroll } from '@ionic/angular';

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
  @ViewChild(IonInfiniteScroll) infiniteScroll!: IonInfiniteScroll;
  
  searchTerm: BehaviorSubject<string> = new BehaviorSubject<string>('');
  movies: Movie[] = [];
  page: number = 1;
  totalResults: number = 0;
  isTyping: boolean = false;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.searchTerm.pipe(debounceTime(300)).subscribe((searchTerm: string) => {
      this.page = 1; // Reset page number on new search
      this.searchMovies(searchTerm);
    });
  }

  searchMovies(searchTerm: string) {
    this.movies = []; // Clear previous results

    if (this.isTyping && searchTerm.trim() !== '') {
      const apiUrl = `http://www.omdbapi.com/?s=${searchTerm}&page=${this.page}&apikey=f91ddec1`;
      this.http.get<MovieSearchResponse>(apiUrl).subscribe((response: MovieSearchResponse) => {
        this.totalResults = parseInt(response.totalResults, 10);
        this.movies = response.Search;
        console.log(response.Search);
      });
    }
  }

  loadMoreMovies(event: any) {
    if (this.movies.length >= this.totalResults) {
      event.target.complete(); // No more results to load
      this.infiniteScroll.disabled = true; // Disable infinite scroll
      return;
    }

    this.page++;
    const searchTerm = this.searchTerm.getValue();
    const apiUrl = `http://www.omdbapi.com/?s=${searchTerm}&page=${this.page}&apikey=f91ddec1`;
    this.http.get<MovieSearchResponse>(apiUrl).subscribe((response: MovieSearchResponse) => {
      this.movies = this.movies.concat(response.Search);
      console.log(response.Search);
      event.target.complete(); // Finish infinite scroll loading
    });
  }
}
