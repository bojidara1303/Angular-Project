import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movies.service';
import { Movie } from 'src/app/types/movie';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  movie = {} as Movie;

  constructor(private movieService: MovieService, private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activeRoute.params.subscribe((data) => {
      const id = data['movieId'];

      this.movieService.getSingleMovie(id).subscribe((movie) => {
        this.movie = movie;
      })
    })
  }
}
