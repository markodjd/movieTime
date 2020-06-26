import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { MovieList } from "../models/movie-list";
import { Observable, Subject } from "rxjs";
import { map } from "rxjs/operators";
import { Movie } from "../models/movie";

const url = "https://movies-v2.api-fetch.sh";

@Injectable({
  providedIn: "root",
})
export class MoviesService {
  paramsSource = new Subject();
  paramsSend = this.paramsSource.asObservable();

  constructor(private http: HttpClient) {}

  getMovies(page: number, params?): Observable<MovieList> {
    let queryParams = {};
    if (params) {
      queryParams = {
        params: new HttpParams()
          .set("genre", (params && params.genre) || "all")
          .set("sort", (params && params.sort) || "trending")
          .set("order", (params && params.order) || -1)
          .set("keywords", (params && params.keywords) || ""),
      };
    }
    return this.http.get<MovieList>(`${url}/movies/${page}`, queryParams).pipe(
      map((data) => {
        return new MovieList(data);
      })
    );
  }

  getDetails(id?: string): Observable<Movie> {
    return this.http.get<Movie>(`${url}/movie/${id}`).pipe(
      map((data) => {
        return new Movie(data);
      })
    );
  }

  sendParams(obj) {
    this.paramsSource.next(obj);
  }
}
