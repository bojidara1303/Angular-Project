import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllNewsComponent } from './all-news/all-news.component';
import { NewsDetailsComponent } from './news-details/news-details.component';



const routes: Routes = [
    { path: 'news', component: AllNewsComponent },
    { path: 'news/newsId/details', component: NewsDetailsComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class NewsRoutingModule { }