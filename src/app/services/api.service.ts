import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



export interface ApiResult{

  page: number,
  next: string,
  entries: number,
  results:any[],
}


@Injectable({
  providedIn: 'root'
})



export class ApiService {

  constructor(private http: HttpClient) { }


  getUpcomingMovies():Observable<ApiResult> {
    const url = 'https://moviesdatabase.p.rapidapi.com/titles/x/upcoming';
    const headers = {
      'X-RapidAPI-Key': '650dbe08b6msh67af47a89fe2d43p1cdbfdjsna6743fa4f9cd',
      'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
    };
    return this.http.get<ApiResult>(url, { headers });
  }

}
