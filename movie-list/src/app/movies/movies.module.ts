import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllMoviesComponent } from './all-movies/all-movies.component';
import { MovieComponent } from './movie/movie.component';
import { AddMovieComponent } from './add-movie/add-movie.component';
import { EditMovieComponent } from './edit-movie/edit-movie.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { RouterModule } from '@angular/router';
import { MoviesRoutingModule } from './movies-routing.module';



@NgModule({
  declarations: [
    AllMoviesComponent,
    MovieComponent,
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
    MovieComponent,
    AddMovieComponent,
    EditMovieComponent,
    MovieDetailsComponent,
  ]
})
export class MoviesModule { }
