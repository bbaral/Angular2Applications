import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})

export class ArticleComponent {

  title: string;
  author: string;
  constructor(private http: HttpClient) {
    http.get('article.json')
      .map(response => response.json()).subscribe(
        article => {
          this.title = article.title;
          this.author = article.author;
        },
      error => console.log(error));
  }
}

//observable {...}
