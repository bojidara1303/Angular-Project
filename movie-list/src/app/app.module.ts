import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AllMoviesComponent } from './movies/all-movies/all-movies.component';
import { MovieComponent } from './movies/movie/movie.component';
import { EditMovieComponent } from './movies/edit-movie/edit-movie.component';
import { AddMovieComponent } from './movies/add-movie/add-movie.component';
import { MovieDetailsComponent } from './movies/movie-details/movie-details.component';
import { AddQuoteComponent } from './quotes/add-quote/add-quote.component';
import { AllQuotesComponent } from './quotes/all-quotes/all-quotes.component';
import { EditQuoteComponent } from './quotes/edit-quote/edit-quote.component';
import { QuoteComponent } from './quotes/quote/quote.component';
import { AllNewsComponent } from './news/all-news/all-news.component';
import { NewsDetailsComponent } from './news/news-details/news-details.component';
import { AllReviewsComponent } from './reviews/all-reviews/all-reviews.component';
import { ReviewComponent } from './reviews/review/review.component';
import { AddReviewComponent } from './reviews/add-review/add-review.component';
import { HomeComponent } from './home/home.component';
import { ErrorPageComponent } from './error-page/error-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    RegisterComponent,
    LoginComponent,
    AllMoviesComponent,
    MovieComponent,
    AddMovieComponent,
    EditMovieComponent,
    MovieDetailsComponent,
    AddQuoteComponent,
    AllQuotesComponent,
    EditQuoteComponent,
    QuoteComponent,
    NewsDetailsComponent,
    AllNewsComponent,
    AllReviewsComponent,
    ReviewComponent,
    AddReviewComponent,
    HomeComponent,
    ErrorPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
