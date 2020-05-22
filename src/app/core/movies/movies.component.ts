import { Component, OnInit } from "@angular/core";
import { MoviesService } from "src/app/services/movies.service";
import { MovieList } from "src/app/models/movie-list";

@Component({
  selector: "app-movies",
  templateUrl: "./movies.component.html",
  styleUrls: ["./movies.component.css"],
})
export class MoviesComponent implements OnInit {
  movies: MovieList;
  page: number = 1;

  constructor(private service: MoviesService) {}

  ngOnInit(): void {
    this.Movies();
  }

  Movies() {
    this.service.getMovies(this.page).subscribe((data) => {
      this.movies = data;
    });
  }
}
