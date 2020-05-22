import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatInputModule } from "@angular/material/input";
import { MatMenuModule } from "@angular/material/menu";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { NavComponent } from "./core/nav/nav.component";
import { MoviesComponent } from "./core/movies/movies.component";
import { HttpClientModule } from "@angular/common/http";
import { MovieComponent } from "./movie/movie.component";
import { DetailsComponent } from "./details/details.component";
import { MatButtonToggleModule } from "@angular/material/button-toggle";
import { YouTubePlayerModule } from "@angular/youtube-player";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    MoviesComponent,
    MovieComponent,
    DetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatInputModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    HttpClientModule,
    MatButtonToggleModule,
    YouTubePlayerModule,
    MatProgressSpinnerModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
