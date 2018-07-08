import {Component, Input, OnInit} from '@angular/core';
import {AppComponent} from '../app.component';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent  {

  @Input() val: number;

  private appcomponent: AppComponent;

  constructor(appcomponent: AppComponent) {
    this.appcomponent = appcomponent;
  }

  like(): void {
    this.appcomponent.incrementLikes();
  }

  likeArticle(): void {

  }

}
