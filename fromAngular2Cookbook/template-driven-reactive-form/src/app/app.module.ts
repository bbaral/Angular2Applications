import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MainComponent } from './main.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ArticleEditorComponent } from './article-editor/article-editor.component';

@NgModule({
  declarations: [
    MainComponent,
    ArticleEditorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [MainComponent]
})
export class AppModule { }
