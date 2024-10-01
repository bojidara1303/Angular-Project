import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { QuotesService } from '../quotes.service';

@Component({
  selector: 'app-add-quote',
  templateUrl: './add-quote.component.html',
  styleUrls: ['./add-quote.component.css']
})
export class AddQuoteComponent {

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

  createQuote(): void {
    if (this.form.invalid) {
      return
    }

    const { imageUrl, quote, author } = this.form.value;

    this.quoteService.createQuote(imageUrl!, quote!, author!).subscribe(() => this.router.navigate(['/quotes']))
  }
}
