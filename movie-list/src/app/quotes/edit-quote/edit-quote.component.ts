import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { QuotesService } from '../quotes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-quote',
  templateUrl: './edit-quote.component.html',
  styleUrls: ['./edit-quote.component.css']
})
export class EditQuoteComponent {

  form = this.fb.group({
    imageUrl: ['', [Validators.required]],
    quote: ['', [Validators.required]],
    author: ['', [Validators.required]]
  });

  constructor(
    private fb: FormBuilder,
    private quoteService: QuotesService,
    private router: Router
  ) { }

  editQuote(): void {
    if (this.form.invalid) {
      return
    }

    
  }
}
