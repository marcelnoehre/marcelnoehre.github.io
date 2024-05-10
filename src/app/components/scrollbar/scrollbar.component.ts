import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-scrollbar',
  standalone: true,
  imports: [],
  templateUrl: './scrollbar.component.html',
  styleUrl: './scrollbar.component.scss'
})
export class ScrollbarComponent {
  @Input() public scrollY: number = 0;
  @Input() public screenHeight: number = 0;
  
  ngAfterViewInit() {
    try { 
      this.scrollY = window.scrollY;
      this.screenHeight = window.innerHeight;
    } catch (err) { }
  }

  scrollbarHeight(): string {
    try { 
      return (this.scrollY / (window.document.body.scrollHeight)) * 100 + 'vh';
    } catch (err) {
      return '0vh'
    }
  }
}
