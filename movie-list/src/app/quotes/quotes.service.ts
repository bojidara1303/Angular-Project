import { HttpClient } from '@angular/common/http';
import { Injectable, OnDestroy } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Quote } from '../types/quote';
import { BehaviorSubject, Subscription, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuotesService implements OnDestroy{
  private quote$$ = new BehaviorSubject<Quote | undefined>(undefined);
  private quote$ = this.quote$$.asObservable();

  quote: Quote | undefined;

  quoteSunscription: Subscription;

  constructor(private http: HttpClient) {
    this.quoteSunscription = this.quote$.subscribe((quote) => {
      this.quote = quote;
    })
  }

  getAllQuotes() {
    const { quotesUrl } = environment;
    return this.http.get<Quote[]>(`${quotesUrl}`);
  }

  getSingleQuote(id: string) {
    const { quotesUrl } = environment;
    return this.http.get<Quote>(`${quotesUrl}/${id}`);
  }

  createQuote(
    imageUrl: string,
    quote: string,
    movie: string
  ) {
    return this.http
      .post<Quote>(environment.quotesUrl, {
        imageUrl,
        quote,
        movie
      })
  }

  editQuote(imageUrl: string, quote: string, movie: string, quoteId: string) {
    return this.http.put<Quote>(`${environment.quotesUrl}/${quoteId}`, {
      imageUrl, quote, movie
    })
      .pipe(tap((quote) => this.quote$$.next(quote)))
  }

  deleteQuote(quoteId: string) {
    return this.http.delete<Quote>(`${environment.quotesUrl}/${quoteId}`)
  }

  ngOnDestroy(): void {
    this.quoteSunscription.unsubscribe();
  }
}

