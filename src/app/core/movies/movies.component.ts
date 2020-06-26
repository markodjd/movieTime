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
  moviesNext: MovieList;
  loading: boolean = false;
  page: number = 1;
  scrollEnabled: boolean = true;
  params = {};

  constructor(private service: MoviesService) {}

  ngOnInit(): void {
    this.Movies();
    this.setParams();
    this.nextPage();
  }

  Movies() {
    if (!this.params) {
      this.params["genre"] = "all";
      this.params["sort"] = "trending";
      this.params["order"] = -1;
      this.params["keywords"] = "";
    }
    this.service.getMovies(this.page, this.params).subscribe((data) => {
      this.movies = data;
    });
  }

  setParams() {
    this.service.paramsSend.subscribe((data) => {
      this.page = 1;
      this.params = data;
      this.movies = null;
      window.scrollTo(0, 0);
      this.Movies();
    });
  }

  nextPage() {
    window.addEventListener("scroll", (e) => {
      if (
        window.innerHeight + window.scrollY >=
          document.body.scrollHeight / 1.3 &&
        this.movies?.movies.length >= 50 &&
        this.scrollEnabled === true
      ) {
        this.scrollEnabled = false;
        this.page++;
        this.loading = true;
        if (!this.params) {
          this.params["genre"] = "all";
          this.params["sort"] = "trending";
          this.params["order"] = -1;
          this.params["keywords"] = "";
        }
        this.service.getMovies(this.page, this.params).subscribe((data) => {
          this.moviesNext = data;
          this.loading = false;
          if (data) {
            this.moviesNext.movies = this.moviesNext.movies.filter(
              ({ _id: id1 }) =>
                !this.movies.movies.some(({ _id: id2 }) => id2 === id1)
            );
            this.movies.movies = this.movies?.movies.concat(
              this.moviesNext.movies
            );
            setTimeout(() => {
              this.scrollEnabled = true;
            }, 1000);
          }
        });
      }
    });
  }
}
