import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddQuoteComponent } from './add-quote/add-quote.component';
import { AllQuotesComponent } from './all-quotes/all-quotes.component';
import { EditQuoteComponent } from './edit-quote/edit-quote.component';
import { QuoteComponent } from './quote/quote.component';



@NgModule({
  declarations: [
    AddQuoteComponent,
    AllQuotesComponent,
    EditQuoteComponent,
    QuoteComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    AddQuoteComponent,
    AllQuotesComponent,
    EditQuoteComponent,
    QuoteComponent
  ]
})
export class QuotesModule { }
