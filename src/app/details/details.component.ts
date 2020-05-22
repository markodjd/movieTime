import { Component, OnInit } from "@angular/core";
import { MoviesService } from "../services/movies.service";
import { ActivatedRoute } from "@angular/router";
import { Movie } from "../models/movie";

var WebTorrent = require("webtorrent-hybrid");
var client = new WebTorrent();

@Component({
  selector: "app-details",
  templateUrl: "./details.component.html",
  styleUrls: ["./details.component.css"],
})
export class DetailsComponent implements OnInit {
  movie: Movie;
  movieId: string = "";
  isAppended = false;

  constructor(private service: MoviesService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.getMovie();
  }

  getMovie() {
    let id = this.route.snapshot.params["id"];
    this.service.getDetails(id).subscribe((data) => {
      this.movie = data;
    });
  }

  window() {
    return window;
  }

  playTrailer() {
    this.movieId = this.movie?.trailer.split("=")[1];
  }

  exitTrailer() {
    this.movieId = "";
  }

  getMagnet() {
    return this.movie.torrent1080pUrl;
  }

  playMovie() {
    this.isAppended = true;

    var torrentId = this.movie?.torrent1080pUrl;

    client.add(torrentId, function (torrent) {
      var file = torrent.files.find(function (file) {
        return file.name.endsWith(".mp4");
      });
      file.appendTo("#movie-player", [{ autoplay: true, muted: true }]);
    });
  }

  stopMovie() {
    client.destroy(() => console.log("destroyed"));
  }
}
