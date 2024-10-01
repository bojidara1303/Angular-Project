import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Quote } from '../types/quote';

@Injectable({
  providedIn: 'root'
})
export class QuotesService {

  constructor(private http: HttpClient) { }

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
  }

  deleteQuote(quoteId:string){
    return this.http.delete<Quote>(`${environment.quotesUrl}/${quoteId}`)
  }
}

