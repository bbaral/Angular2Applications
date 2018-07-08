import { Component } from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-article-editor',
  templateUrl: './article-editor.component.html',
  styleUrls: ['./article-editor.component.css']
})
export class ArticleEditorComponent {
  tagControls: Array<FormControl> = [];
  tagFormArray: FormArray = new FormArray(this.tagControls);
  article: {title: string, information: string} = {};

  titleControl: FormControl = new FormControl(null, Validators.required);
  informationControl: FormControl = new FormControl(null, Validators.required);

  articleFormGroup: FormGroup = new FormGroup({
    title: this.titleControl,
    information: this.informationControl
  });

  saveArticle(): void {
    if (this.articleFormGroup.valid) {
      this.article = this.articleFormGroup.value;
      alert('Valid!');
    } else {
      console.log('Missing field(s)!');
    }
  }

  addTag(): void {
    this.tagFormArray.push(new FormControl(null, Validators.required));
  }

  removeTag(idx: number): void {
    this.tagFormArray.removeAt(idx);
  }

}
