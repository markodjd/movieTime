import { Component, OnInit, Inject } from "@angular/core";
import { MoviesService } from "../services/movies.service";
import { Movie } from "../models/movie";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";

@Component({
  selector: "app-details",
  templateUrl: "./details.component.html",
  styleUrls: ["./details.component.css"],
})
export class DetailsComponent implements OnInit {
  movie: Movie;
  movieId: any = "";
  isAppended = false;
  magnet: string;
  player = false;

  constructor(
    private service: MoviesService,
    @Inject(MAT_DIALOG_DATA) public id: any
  ) {}

  ngOnInit(): void {
    this.getMovie();
  }

  getMovie() {
    this.service.getDetails(this.id).subscribe((data) => {
      this.movie = data;
      this.getMagnet();
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
    if (this.movie.torrent1080pUrl) {
      this.magnet = this.movie.torrent1080pUrl;
    } else {
      this.magnet = this.movie.torrent720pUrl;
    }
  }

  changeMagnet(el) {
    this.magnet = el.value;
  }

  playMovie() {
    console.log(this.magnet);
    var WebTorrent = require("webtorrent-hybrid");
    var client = new WebTorrent();

    var torrentId = this.magnet;

    this.player = true;

    client.add(torrentId, function (torrent) {
      torrent.files.forEach(function (file) {
        torrent.files.find(function (file) {
          if (
            file.name.endsWith(".mp4") ||
            file.name.endsWith(".avi") ||
            file.name.endsWith(".mkv") ||
            file.name.endsWith(".mpeg")
          ) {
            file.appendTo("#movie-player");
          }
        });
      });
    });
  }
}
