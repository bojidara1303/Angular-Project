import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddMovieComponent } from './add-movie/add-movie.component';
import { AllMoviesComponent } from './all-movies/all-movies.component';
import { EditMovieComponent } from './edit-movie/edit-movie.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';


const routes: Routes = [
    { path: 'add-movie', component: AddMovieComponent },
    { path: 'movies', component: AllMoviesComponent },
    { path: 'movies/movieId/edit', component: EditMovieComponent },
    { path: 'movies/:movieId/details', component: MovieDetailsComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MoviesRoutingModule { }