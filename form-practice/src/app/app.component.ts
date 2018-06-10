import {Component, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') signUpForm: NgForm;
  defaultQuestion = 'pet';

  suggestUserName() {
    const suggestedName = 'Superuser';
  }

  /**
   Another way of doing is like this. Simply comment out
   @ViewChild('f') signUpForm: NgForm; and onSubmit method below this one
   and uncomment this OnSubmit method. You will see the same result
   onSubmit(form: NgForm) {
    console.log(form);
  }
   */

  onSubmit() {
    console.log(this.signUpForm);
  }
}
