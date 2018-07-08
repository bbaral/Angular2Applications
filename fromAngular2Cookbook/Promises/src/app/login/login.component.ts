import { Component, OnInit } from '@angular/core';
import {AuthenticationService, AuthState} from '../authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {
  loggedIn: boolean = false;

  constructor(private authentication: AuthenticationService) {
    authentication.authChange.subscribe(
      newAuthState => this.loggedIn = (newAuthState === AuthState.loggedIn)
    )
  }

  login(): void {
    this.authentication.login();
  }

  logout(): void {
    this.authentication.logout();
  }

}
