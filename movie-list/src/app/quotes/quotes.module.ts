import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddQuoteComponent } from './add-quote/add-quote.component';
import { AllQuotesComponent } from './all-quotes/all-quotes.component';
import { EditQuoteComponent } from './edit-quote/edit-quote.component';
import { QuoteComponent } from './quote/quote.component';
import { RouterModule } from '@angular/router';
import { QuotesRoutingModule } from './quotes-routing.module';



@NgModule({
  declarations: [
    AddQuoteComponent,
    AllQuotesComponent,
    EditQuoteComponent,
    QuoteComponent
  ],
  imports: [
    CommonModule,
    QuotesRoutingModule,
    RouterModule
  ],
  exports:[
    AddQuoteComponent,
    AllQuotesComponent,
    EditQuoteComponent,
    QuoteComponent
  ]
})
export class QuotesModule { }
