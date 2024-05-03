import { Directive, EventEmitter, HostListener, Output } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Directive({
  selector: '[appScroll]',
  standalone: true
})
export class ScrollDirective {
  @Output() scrollY = new EventEmitter<number>();

  constructor() { }
  
  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event) {
    this.scrollY.emit(window.scrollY);
  }

}
