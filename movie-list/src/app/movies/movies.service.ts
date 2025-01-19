import { Injectable, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { Movie, MovieToEdit } from '../types/movie';
import { BehaviorSubject, Subscription, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService implements OnDestroy {
  private movie$$ = new BehaviorSubject<MovieToEdit | undefined>(undefined)
  private movie$ = this.movie$$.asObservable();

  movie: MovieToEdit | undefined;
  // MOVIE_KEY = '[movie]';

  movieSubscription: Subscription;

  constructor(private http: HttpClient) {
    this.movieSubscription = this.movie$.subscribe((movie) => {
      this.movie = movie;
    })
  }

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
    year: string,
    cast: string,
    director: string,
    duration: string,
    summary: string,
  ) {

    return this.http
      .post<Movie>(environment.moviesUrl, {
        cover, title, genre, year, cast, director, duration, summary
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
    _id?: string
  ) {
    return this.http
      .put<MovieToEdit>(`${environment.moviesUrl}/${_id}`, { cover, title, genre, year, cast, director, duration, summary })
      .pipe(tap((movie) => this.movie$$.next(movie)))
  }

  deleteMovie(_id: string) {
    return this.http.delete<Movie>(`${environment.moviesUrl}/${_id}`)
  }

  ngOnDestroy(): void {
    this.movieSubscription.unsubscribe();
  }
}