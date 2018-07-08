import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable()
export class AuthenticationService {
  private authState_: AuthState;
  private authManager_:BehaviorSubject<AuthState> = new BehaviorSubject(AuthState.loggedOut);
  authChange: Observable<AuthState>;

  constructor() {
    this.authChange = this.authManager_.asObservable();
  }

  login(): void {
    this.setAuthState_(AuthState.loggedIn);
  }

  logout(): void {
    this.setAuthState_(AuthState.loggedOut);
  }

  emitAuthState(): void {
    this.authManager_.next(this.authState_);
  }

  private setAuthState_(newAuthState: AuthState): void {
    this.authState_ = newAuthState;
    this.emitAuthState();
  }
}

export const enum AuthState {
  loggedIn,
  loggedOut
}
