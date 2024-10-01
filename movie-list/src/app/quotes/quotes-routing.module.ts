import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddQuoteComponent } from './add-quote/add-quote.component';
import { AllQuotesComponent } from './all-quotes/all-quotes.component';
import { EditQuoteComponent } from './edit-quote/edit-quote.component';


const routes: Routes = [
    { path: 'quotes/add-quote', component: AddQuoteComponent },
    { path: 'quotes', component: AllQuotesComponent },
    { path: 'quotes/quoteId/edit', component: EditQuoteComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class QuotesRoutingModule { }