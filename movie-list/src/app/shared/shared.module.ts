import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmailValidator } from '@angular/forms';



@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule
  ],
  exports: [EmailValidator]
})
export class SharedModule { }
