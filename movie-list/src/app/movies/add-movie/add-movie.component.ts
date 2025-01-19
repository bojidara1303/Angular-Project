import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MovieService } from '../movies.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent {

  form = this.fb.group({
    cover: ['', [Validators.required]],
    title: ['', [Validators.required]],
    genre: ['', [Validators.required]],
    year: ['', [Validators.required, Validators.min(1900), Validators.max(2025)]],
    cast: ['', [Validators.required]],
    director: ['', [Validators.required]],
    duration: ['', [Validators.required, Validators.min(0)]],
    summary: ['', [Validators.required]],
  });

  constructor(
    private fb: FormBuilder,
    private movieService: MovieService,
    private router: Router
  ) { }

  createMovie(): void {
    if (this.form.invalid) {
      return
    }

    const { 
      cover, title, genre, year, cast, director, duration, summary
    } = this.form.value;

    this.movieService
    .createMovie(cover!, title!, genre!, year!, cast!, director!, duration!, summary!)
    .subscribe(()=>{
      this.router.navigate(['/movies'])
    })
  }
}
