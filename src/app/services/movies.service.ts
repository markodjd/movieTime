import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { MovieList } from "../models/movie-list";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Movie } from "../models/movie";

const url = "https://movies-v2.api-fetch.sh";

@Injectable({
  providedIn: "root",
})
export class MoviesService {
  constructor(private http: HttpClient) {}

  getMovies(page: number): Observable<MovieList> {
    return this.http.get<MovieList>(`/movies/${page}`).pipe(
      map((data) => {
        return new MovieList(data);
      })
    );
  }

  getDetails(id?: number): Observable<Movie> {
    return this.http.get<Movie>(`/movie/${id}`).pipe(
      map((data) => {
        return new Movie(data);
      })
    );
  }
}
