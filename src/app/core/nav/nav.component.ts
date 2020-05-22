import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-nav",
  templateUrl: "./nav.component.html",
  styleUrls: ["./nav.component.css"],
})
export class NavComponent implements OnInit {
  genres: string[] = [
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

  constructor() {}

  ngOnInit(): void {}
}
