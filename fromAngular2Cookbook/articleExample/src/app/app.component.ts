import {Component, Input, OnDestroy, OnInit} from '@angular/core';

//@Component is a decorator
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy{

  @Input() articleTitle: string;

  currentDate: Date;
  title: string;
  name: string;
  shareCt: number;
  wordCount: number;
  myTitle: string;
  likes: number;
  private isStale: boolean = false;
  constructor() {
    this.currentDate = new Date();
    this.title = `Police Apprehend Tiramisu Thieves`;
    this.name = `Jake`;
    this.shareCt = 0;
    this.wordCount = 0;
    this.myTitle = '';
    this.likes = 0;
  }

  ngOnInit() {
    console.log('created', this.articleTitle);
  }

  ngOnDestroy(){
    console.log('destroyed', this.articleTitle);
  }

  share(e: Event): void {
    console.log(e);
    ++this.shareCt;
  }

  updateWordCount(e: number): void {
    this.wordCount = e;
  }

  setTitle(val:string): void {
    this.myTitle = val;
  }

  checkStale(val: string): void {
    this.isStale = val !== this.myTitle;
  }

  incrementLikes(): void {
    this.likes++;
  }

}
