import {AfterViewInit, Component, ViewChild} from '@angular/core';
import { HttpClient } from '@angular/common/http'
import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import {Subject} from 'rxjs/Subject';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})

export class ArticleComponent implements AfterViewInit {

  title: string;
  author: string;
  clicks: Array<Event> = [];
  clickEmitter: Observable<Event>;
  private clickSubject_: Subject<Event> = new Subject();

  @ViewChild('btn') btn;

  constructor(private http: HttpClient) {
    http.get('https://raw.githubusercontent.com/bbaral/Angular2Applications/master/fromAngular2Cookbook/Promises/src/app/article.json')
      .map(response => response).subscribe(
        article => {
          this.title = article.title;
          this.author = article.author;
        },
      error => console.log(error));

    this.clickEmitter = this.clickSubject_.asObservable();
    this.clickEmitter.subscribe(clickEvent => this.clicks.push(clickEvent));

  }

  ngAfterViewInit(){
    this.clickEmitter = Observable.fromEvent(
      this.btn.nativeElement, 'click');
    this.clickEmitter.subscribe(clickEvent => this.clicks.push(clickEvent));
  }

  publish(e: Event): void {
    this.clickSubject_.next(e);
  }
}

//observable {...}
