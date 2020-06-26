import { Component, OnInit, Input } from "@angular/core";
import { Movie } from "../models/movie";
import { MatDialog } from "@angular/material/dialog";
import { DetailsComponent } from "../details/details.component";
import { MoviesService } from "../services/movies.service";

@Component({
  selector: "app-movie",
  templateUrl: "./movie.component.html",
  styleUrls: ["./movie.component.css"],
})
export class MovieComponent implements OnInit {
  @Input() movie: Movie;

  constructor(private dialog: MatDialog, private service: MoviesService) {}

  ngOnInit(): void {}

  openDialog(id: string) {
    let dialogRef = this.dialog.open(DetailsComponent, {
      height: "100vh",
      width: "100vw",
      maxWidth: "100vw",
      data: id,
    });

    dialogRef.afterClosed().subscribe((data) => {
      dialogRef = null;
    });
  }
}
