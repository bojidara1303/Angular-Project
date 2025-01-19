import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MovieToEdit } from 'src/app/types/movie';
import { MovieService } from '../movies.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-edit-movie',
  templateUrl: './edit-movie.component.html',
  styleUrls: ['./edit-movie.component.css']
})
export class EditMovieComponent implements OnInit {
  // showEditMode: boolean = false;

  editMovie: MovieToEdit = {
    cover: '',
    title: '',
    genre: '',
    year: 0,
    cast: '',
    director: '',
    duration: 0,
    summary: '',
    _id: ''
  }

  form = this.fb.group({
    cover: ['', [Validators.required]],
    title: ['', [Validators.required]],
    genre: ['', [Validators.required]],
    year: [0, [Validators.required], Validators.min(1900), Validators.max(2025)],
    cast: ['', [Validators.required]],
    director: ['', [Validators.required]],
    duration: [0, [Validators.required, Validators.min(0)]],
    summary: ['', [Validators.required]],
    _id: ['']
  })

  constructor(private fb: FormBuilder, private movieService: MovieService,private router: Router) { }

  ngOnInit(): void {
    const { cover, title, genre, year, cast, director, duration, summary, _id } = this.movieService.movie!;
    this.editMovie = { cover, title, genre, year, cast, director, duration, summary, _id };
    this.form.setValue({ cover, title, genre, year, cast, director, duration, summary, _id })
  }


  saveMovieHandler(): void {
    if (this.form.invalid) {
      return
    }

    this.editMovie = this.form.value as MovieToEdit;
    const { cover, title, genre, year, cast, director, duration, summary, _id } = this.editMovie;
  }
}
