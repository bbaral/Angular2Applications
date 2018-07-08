import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ArticleComponent } from './article.component';
import { ArticleListComponent } from './article-list/article-list.component';

@NgModule({
  declarations: [
    ArticleComponent,
    ArticleListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [ArticleComponent]
})
export class AppModule { }
