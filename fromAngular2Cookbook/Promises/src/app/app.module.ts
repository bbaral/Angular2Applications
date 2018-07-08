import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'
import { ArticleComponent } from './article.component';
import { LoginComponent } from './login/login.component';
import {AuthenticationService} from './authentication.service';

@NgModule({
  declarations: [
    ArticleComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [AuthenticationService],
  bootstrap: [ArticleComponent]
})
export class AppModule { }
