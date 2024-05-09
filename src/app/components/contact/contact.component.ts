import { AfterViewInit, Component, Input } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent implements AfterViewInit {
  @Input() public scrollY: number = 0;
  @Input() public screenHeight: number = 0;

  ngAfterViewInit() {
    try { 
      this.scrollY = window.scrollY;
      this.screenHeight = window.innerHeight;
    } catch (err) { }
  }
}
