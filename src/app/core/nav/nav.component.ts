import { Component, OnInit } from "@angular/core";
import { MoviesService } from "src/app/services/movies.service";

@Component({
  selector: "app-nav",
  templateUrl: "./nav.component.html",
  styleUrls: ["./nav.component.css"],
})
export class NavComponent implements OnInit {
  genres: string[] = [
    "all",
    "action",
    "adventure",
    "animation",
    "comedy",
    "crime",
    "documentary",
    "family",
    "fantasy",
    "history",
    "horror",
    "music",
    "mystery",
    "romance",
    "science-fiction",
    "thriller",
    "war",
    "western",
  ];

  sort: string[] = [
    "trending",
    "popularity",
    "rating",
    "last added",
    "title",
    "year",
  ];

  params = {
    genre: "all",
    sort: "trending",
    order: -1,
    keywords: "",
  };

  constructor(private service: MoviesService) {}

  ngOnInit(): void {
    this.resetQuery();
  }

  sendGenre(el) {
    this.params.genre = el.value;
    this.params.order = -1;
    this.params.keywords = "";
    this.service.sendParams(this.params);
  }

  sendSort(el) {
    this.params.sort = el.value;
    this.params.order = -1;
    this.params.keywords = "";
    this.service.sendParams(this.params);
  }

  sendKeywords(el) {
    this.params.genre = "all";
    this.params.sort = "trending";
    this.params.order = -1;
    this.params.keywords = el.target.value;
    this.service.sendParams(this.params);
  }

  resetQuery() {
    this.params.genre = "all";
    this.params.sort = "trending";
    this.params.order = -1;
    this.params.keywords = "";
    this.service.sendParams(this.params);
  }
}
