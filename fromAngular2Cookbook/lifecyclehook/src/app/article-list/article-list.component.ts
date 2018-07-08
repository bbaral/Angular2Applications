import {Component} from '@angular/core';

@Component({
  selector: 'article-list',
  template: ` <input (keyup.enter)="add($event)">
  <article *ngFor="let title of titles; let i = index"
           [articleTitle]="title">
    <button (click)="remove(i)">X</button>
  </article>`,
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent {
  titles:Array<string> = [];

  add(e:Event): void {
    this.titles.push((<HTMLInputElement>e.target).value);
    (<HTMLInputElement>e.target).value = '';

  }

  remove(index: number) {
    this.titles.splice(index, 1);
  }
}
