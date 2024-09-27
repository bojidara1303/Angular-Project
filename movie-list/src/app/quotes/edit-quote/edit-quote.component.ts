import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-edit-quote',
  templateUrl: './edit-quote.component.html',
  styleUrls: ['./edit-quote.component.css']
})
export class EditQuoteComponent {

  formSubmitHandler(form: NgForm) {
    console.log(form);
  }
}
