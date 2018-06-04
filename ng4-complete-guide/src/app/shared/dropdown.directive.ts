import {Directive, HostBinding, HostListener, Input, OnInit} from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective implements OnInit{

  // @Input() HoverOpen = true;
  // @Input() HoverClose = false;

  @HostBinding('class.open') isOpen = false;
  @HostBinding('class.close') isClose = false;

  @HostListener('click') toggleOpen() {
    this.isOpen = !this.isOpen;
  }

  constructor() {
  }

  ngOnInit() {

  }

  // @HostListener('mouseenter') mouseover(eventData: Event) {
  //   this.isOpen = this.isOpen;
  // }
  //
  // @HostListener('mouseleave') mouseleave(eventData: Event) {
  //   this.isOpen = !this.isOpen;
  // }

}
