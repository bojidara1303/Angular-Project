import { Component, OnInit } from '@angular/core';
import { Quote } from 'src/app/types/quote';
import { QuotesService } from '../quotes.service';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-all-quotes',
  templateUrl: './all-quotes.component.html',
  styleUrls: ['./all-quotes.component.css']
})
export class AllQuotesComponent implements OnInit {
  quotes: Quote[] | null = [];

  constructor(private quoteService: QuotesService, private userService: UserService) { }

  get isLoggedIn(): boolean {
    return this.userService.isLogged;
  }

  ngOnInit(): void {
    this.quoteService.getAllQuotes().subscribe({
      next: (quotes) => {
        this.quotes = quotes;
      }
    })
  }
}
