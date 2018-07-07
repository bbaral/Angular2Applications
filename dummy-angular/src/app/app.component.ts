import {ChangeDetectionStrategy, ChangeDetectorRef, Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {


  count = 0;
  constructor(private cdr: ChangeDetectorRef) {
    setTimeout(() => {
      this.count++;
      this.cdr.markForCheck();
    }, 100);
  }

 detach() {
    this.cdr.detach();
 }

  reattach() {
    this.cdr.reattach();
 }

 detect() {
    this.cdr.detectChanges();
 }

}



