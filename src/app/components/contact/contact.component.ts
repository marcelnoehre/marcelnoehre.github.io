import { AfterViewInit, Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [MatCardModule],
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
