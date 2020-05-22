import { Movie } from "./movie";

export class MovieList {
  movies: Movie[];

  constructor(obj?: any) {
    this.movies =
      obj.map((data) => {
        return new Movie(data);
      }) || [];
  }
}
