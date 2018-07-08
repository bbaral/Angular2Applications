import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'
import { ArticleComponent } from './article.component';

@NgModule({
  declarations: [
    ArticleComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [ArticleComponent]
})
export class AppModule { }
