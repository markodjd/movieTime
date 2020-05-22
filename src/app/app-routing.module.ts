import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MoviesComponent } from "./core/movies/movies.component";
import { DetailsComponent } from "./details/details.component";

const routes: Routes = [
  { path: "home", component: MoviesComponent },
  { path: "home/:id", component: DetailsComponent },
  { path: "", redirectTo: "home", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
