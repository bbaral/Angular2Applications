import {ChangeDetectionStrategy, ChangeDetectorRef, Component, forwardRef, Inject, Input} from '@angular/core';
import {ArticleComponent} from './article/article.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {

  @Input() val: number;
  private likeEnabled: boolean = false;
  private articlecomponent: ArticleComponent;

  constructor(@Inject(forwardRef(() => ArticleComponent)) articleComponent: ArticleComponent) {
    this.articlecomponent = articleComponent;
  }

  likeArticle(): void {
    this.articlecomponent.incrementLinkes();
  }

  setLikeEnabled(newEnabledStatus: boolean): void {
    this.likeEnabled = newEnabledStatus
  }

}



