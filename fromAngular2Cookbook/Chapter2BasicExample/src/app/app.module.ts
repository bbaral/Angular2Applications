import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ArticleComponent } from './article.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { RootComponent } from './root/root.component';

@NgModule({
  declarations: [
    ArticleComponent,
    FeedbackComponent,
    RootComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [ArticleComponent]
})
export class AppModule { }
