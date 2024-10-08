import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsDetailsComponent } from './news-details/news-details.component';
import { AllNewsComponent } from './all-news/all-news.component';
import { NewsRoutingModule } from './news.routing.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    NewsDetailsComponent,
    AllNewsComponent
  ],
  imports: [
    CommonModule,
    NewsRoutingModule,
    RouterModule
  ],
  exports:[
    NewsDetailsComponent,
    AllNewsComponent
  ]
})
export class NewsModule { }
