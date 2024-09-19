import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllMoviesComponent } from './all-movies/all-movies.component';
import { MovieComponent } from './movie/movie.component';
import { AddMovieComponent } from './add-movie/add-movie.component';
import { EditMovieComponent } from './edit-movie/edit-movie.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';



@NgModule({
  declarations: [
    AllMoviesComponent,
    MovieComponent,
    AddMovieComponent,
    EditMovieComponent,
    MovieDetailsComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    AllMoviesComponent,
    MovieComponent,
    AddMovieComponent,
    EditMovieComponent,
    MovieDetailsComponent
  ]
})
export class MoviesModule { }
