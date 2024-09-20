import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllReviewsComponent } from './all-reviews/all-reviews.component';
import { ReviewComponent } from './review/review.component';
import { AddReviewComponent } from './add-review/add-review.component';



@NgModule({
  declarations: [
    AllReviewsComponent,
    ReviewComponent,
    AddReviewComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    AllReviewsComponent,
    ReviewComponent,
    AddReviewComponent
  ]
})
export class ReviewsModule { }
