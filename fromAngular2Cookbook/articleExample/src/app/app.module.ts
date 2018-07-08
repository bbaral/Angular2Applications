import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ArticleComponent } from './article/article.component';
import { LogoComponent } from './logo/logo.component';
import { TextEditorComponent } from './text-editor/text-editor.component';
import { ClickToRevealDirective } from './click-to-reveal.directive';
import { AdSectionComponent } from './ad-section/ad-section.component';
import { ArticleListComponent } from './article-list/article-list.component';
import { FeedbackComponent } from './feedback/feedback.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    LogoComponent,
    TextEditorComponent,
    ClickToRevealDirective,
    AdSectionComponent,
    ArticleListComponent,
    FeedbackComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
