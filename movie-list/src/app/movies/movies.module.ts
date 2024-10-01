import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllMoviesComponent } from './all-movies/all-movies.component';
import { AddMovieComponent } from './add-movie/add-movie.component';
import { EditMovieComponent } from './edit-movie/edit-movie.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { RouterModule } from '@angular/router';
import { MoviesRoutingModule } from './movies-routing.module';


@NgModule({
  declarations: [
    AllMoviesComponent,
    AddMovieComponent,
    EditMovieComponent,
    MovieDetailsComponent
  ],
  imports: [
    CommonModule,
    MoviesRoutingModule,
    RouterModule
  ],
  exports:[
    AllMoviesComponent,
    AddMovieComponent,
    EditMovieComponent,
    MovieDetailsComponent,
  ]
})
export class MoviesModule { }
