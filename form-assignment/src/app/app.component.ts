import {Component, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') signUpForm: NgForm;
  Choice = ['basic', 'advance', 'pro'];
  defaultSelectedChoice = 'advance';

  user = {
    email: '',
    password: '',
    Choice: ''
  };

  submitted = false;


  onSubmit() {
    this.submitted = true;
    this.user.email = this.signUpForm.value.email;
    this.user.password = this.signUpForm.value.password;
    this.user.Choice = this.signUpForm.value.choice;

    this.signUpForm.reset();
  }
}
