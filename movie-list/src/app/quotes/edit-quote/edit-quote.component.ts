import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { QuotesService } from '../quotes.service';
import { Router } from '@angular/router';
import { Quote, QuoteToEdit } from 'src/app/types/quote';

@Component({
  selector: 'app-edit-quote',
  templateUrl: './edit-quote.component.html',
  styleUrls: ['./edit-quote.component.css']
})
export class EditQuoteComponent implements OnInit {
  editQuote: QuoteToEdit = {
    imageUrl: '',
    quote: '',
    movie: ''
  }

  form = this.fb.group({
    imageUrl: ['', [Validators.required]],
    quote: ['', [Validators.required]],
    movie: ['', [Validators.required]]
  });

  constructor(
    private fb: FormBuilder,
    private quoteService: QuotesService,
    // private router: Router
  ) { }

  ngOnInit(): void {
    const { imageUrl, quote, movie } = this.quoteService.quote!
    this.editQuote = { imageUrl, quote, movie };
    this.form.setValue({ imageUrl, quote, movie })
  }
}
