import {Directive, HostListener} from '@angular/core';

@Directive({
  selector: '[appClickToReveal]'
})
export class ClickToRevealDirective {

  @HostListener('click', ['$event.target'])

  reveal(target) {
    target.style['white-space'] = 'normal';
    target.style['color'] = 'red';
  }

}
