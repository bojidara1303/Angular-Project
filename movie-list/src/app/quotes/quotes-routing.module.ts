import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddQuoteComponent } from './add-quote/add-quote.component';
import { AllQuotesComponent } from './all-quotes/all-quotes.component';
import { EditQuoteComponent } from './edit-quote/edit-quote.component';
import { QuoteComponent } from './quote/quote.component';


const routes: Routes = [
    { path: 'add-quote', component: AddQuoteComponent },
    { path: 'quotes', component: AllQuotesComponent },
    { path: 'edit-quote', component: EditQuoteComponent },
    { path: 'quotes/quote', component: QuoteComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class QuotesRoutingModule { }