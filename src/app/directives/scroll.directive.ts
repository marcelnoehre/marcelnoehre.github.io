import { Directive, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[appScroll]',
  standalone: true
})
export class ScrollDirective {
  @Output() scrollY = new EventEmitter<number>();
  @Output() screenHeight = new EventEmitter<number>();

  constructor() { }
  
  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event) {
    this.scrollY.emit(window.scrollY);
    this.screenHeight.emit(window.innerHeight);
  }

}
