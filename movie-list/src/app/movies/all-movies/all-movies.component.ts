import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/types/movie';
import { MovieService } from '../movies.service';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-all-movies',
  templateUrl: './all-movies.component.html',
  styleUrls: ['./all-movies.component.css']
})
export class AllMoviesComponent implements OnInit {
  movies: Movie[] | null = [];

  constructor(private movieService: MovieService, private userService: UserService) { }
  get isLoggedIn(): boolean {
    return this.userService.isLogged;
  }

  ngOnInit(): void {
    this.movieService.getAllMovies().subscribe({
      next: (movies) => {
        this.movies = movies;
      }
    })
  }

}
