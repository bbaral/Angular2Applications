import { Component } from '@angular/core';

//@Component is a decorator
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentDate: Date;
  title: string;
  name: string;
  shareCt: number;
  constructor() {
    this.currentDate = new Date();
    this.title = `Police Apprehend Tiramisu Thieves`;
    this.name = `Jake`;
    this.shareCt = 0;
  }

  share(e: Event): void {
    console.log(e);
    ++this.shareCt;
  }
}
