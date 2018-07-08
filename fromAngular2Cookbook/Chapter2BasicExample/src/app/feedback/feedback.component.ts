import {Component, forwardRef, Inject, Input} from '@angular/core';
import {ArticleComponent} from '../article.component';

@Component({
  selector: 'feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent {
  @Input() val: number;
  private articleComponent: ArticleComponent;
  private likeEnabled: boolean = false;

  constructor(@Inject(forwardRef(() => ArticleComponent)) articleComp: ArticleComponent) {
    this.articleComponent = articleComp;
    this.updateLikes();
  }

  updateLikes() {
    this.val = this.articleComponent.likes;
  }

  likeArticle(): void {
    this.articleComponent.incrementLikes();
    this.updateLikes();
  }

  setLikeEnabled(newEnabledStatus: boolean): void {
    this.likeEnabled = newEnabledStatus;
  }

}
