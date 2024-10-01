import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { Movie } from '../types/movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) { }

  getAllMovies() {
    const { moviesUrl } = environment;
    return this.http.get<Movie[]>(`${moviesUrl}`);
  }

  getSingleMovie(id: string) {
    const { moviesUrl } = environment;
    return this.http.get<Movie>(`${moviesUrl}/${id}`);
  }

  createMovie(
    cover: string,
    title: string,
    genre: string,
    year: number,
    cast: string,
    director: string,
    duration: number,
    summary: string
  ) {
    return this.http
      .post<Movie>(environment.moviesUrl, {
        cover,
        title,
        genre,
        year,
        cast,
        director,
        duration,
        summary
      })
  }

  editMovie(
    cover: string,
    title: string,
    genre: string,
    year: number,
    cast: string,
    director: string,
    duration: number,
    summary: string,
    movieId: string
  ) {
    return this.http
      .put<Movie>(`${environment.moviesUrl}/${movieId}`, {
        cover, title, genre, year, cast, director, duration, summary
      })
  }

  deleteMovie(movieId: string) {
    return this.http.delete<Movie>(`${environment.moviesUrl}/${movieId}`)
  }
}