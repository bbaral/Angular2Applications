import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { HomeComponent } from './home/home.component';
import {RoutingModule} from './Routing.component';
import {UsersService} from './users.service';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
