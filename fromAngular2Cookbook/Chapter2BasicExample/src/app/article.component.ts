import {AfterViewInit, Component, ContentChild, ViewChild} from '@angular/core';
import {FeedbackComponent} from './feedback/feedback.component';

@Component({
  selector: 'article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements AfterViewInit {

  @ViewChild(FeedbackComponent) feedbackComponent: FeedbackComponent;
  //@ContentChild (FeedbackComponent) feedbackComponent: FeedbackComponent;

  likes: number = 0;

  constructor() {
    console.log(this.feedbackComponent);
  }

  ngAfterViewInit() {
    console.log( this.feedbackComponent);
  }

  incrementLikes(): void {
    this.likes++;
  }

  changeLikesEnabled(e: Event): void {
    this.feedbackComponent.setLikeEnabled((<HTMLInputElement>e.target).checked);
  }
}
