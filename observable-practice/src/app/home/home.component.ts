import {Component, OnDestroy, OnInit} from '@angular/core';
import {interval, Observable, Observer, Subscription} from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  numObs: Subscription;
  customObs: Subscription;
  constructor() {
  }

  ngOnInit() {
    const myNumbers = interval(1000)
      .pipe(map((data: number) => {
        return data * 2;
      }
      ));

    this.numObs = myNumbers.subscribe(
      (number: number) => {
        console.log(number);
      }
    );

    const myObservable = Observable.create((observer: Observer<string>) => {
      setTimeout(() => {
        observer.next('first package');
      }, 200);
      setTimeout(() => {
        observer.next('second package');
      }, 400);
      setTimeout(() => {
        observer.complete();
      }, 300);
      /**
       * Third package never executed because Subscribe() takes 3 arguments
       * next() complete() and error(). If your error get executed before complete then it stops.
       */
      setTimeout(() => {
        observer.error('Third package');
      }, 300);
    });
    this.customObs = myObservable.subscribe(
      (data: string) => {console.log(data);},
      (error: string) => {console.log(error);},
      () => {console.log('task completed');}
    );
  }

  ngOnDestroy() {
    this.numObs.unsubscribe();
    this.customObs.unsubscribe();
  }

}
