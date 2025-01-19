import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllMoviesComponent } from './movies/all-movies/all-movies.component';
import { EditMovieComponent } from './movies/edit-movie/edit-movie.component';
import { AddMovieComponent } from './movies/add-movie/add-movie.component';
import { MovieDetailsComponent } from './movies/movie-details/movie-details.component';
import { AddQuoteComponent } from './quotes/add-quote/add-quote.component';
import { AllQuotesComponent } from './quotes/all-quotes/all-quotes.component';
import { EditQuoteComponent } from './quotes/edit-quote/edit-quote.component';
import { AllNewsComponent } from './news/all-news/all-news.component';
import { NewsDetailsComponent } from './news/news-details/news-details.component';
import { AllReviewsComponent } from './reviews/all-reviews/all-reviews.component';
import { ReviewComponent } from './reviews/review/review.component';
import { AddReviewComponent } from './reviews/add-review/add-review.component';
import { HomeComponent } from './home/home.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { RegisterComponent } from './user/register/register.component';
import { LoginComponent } from './user/login/login.component';
import { FooterComponent } from './core/footer/footer.component';
import { HeaderComponent } from './core/header/header.component';
import { UserRoutingModule } from './user/user-routing.module';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { RouterModule } from '@angular/router';
import { MoviesRoutingModule } from './movies/movies-routing.module';
import { QuotesRoutingModule } from './quotes/quotes-routing.module';
import { AboutUsComponent } from './about-us/about-us.component';
import { NewsRoutingModule } from './news/news.routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmailDirective } from './shared/validators/email.directive';
import { appInterceptorProvider } from './app.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    RegisterComponent,
    LoginComponent,
    AllMoviesComponent,
    AddMovieComponent,
    EditMovieComponent,
    MovieDetailsComponent,
    AddQuoteComponent,
    AllQuotesComponent,
    EditQuoteComponent,
    NewsDetailsComponent,
    AllNewsComponent,
    AllReviewsComponent,
    ReviewComponent,
    AddReviewComponent,
    HomeComponent,
    ErrorPageComponent,
    ContactUsComponent,
    AboutUsComponent,
    EmailDirective,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    UserRoutingModule,
    MoviesRoutingModule,
    QuotesRoutingModule,
    NewsRoutingModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule, 
    HttpClientModule
  ],
  providers: [appInterceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
