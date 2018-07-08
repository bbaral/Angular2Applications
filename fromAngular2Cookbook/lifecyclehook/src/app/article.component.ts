import {Component, Input, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'article',
  template: `<h1>
      <ng-content></ng-content>{{articleTitle}}
    </h1>`,
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit, OnDestroy {

  @Input() articleTitle: string;

  ngOnInit() {
    console.log('Created: ', this.articleTitle);
  }

  ngOnDestroy() {
    console.log('Destroyed: ', this.articleTitle);
  }
}
