import { AfterViewInit, Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [MatButtonModule, MatIconModule],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent implements AfterViewInit {
  @Input() public screenWidth: number = 0;
  @Input() public screenHeight: number = 0;

  ngAfterViewInit() {
    try { 
      this.screenWidth = window.innerWidth;
      this.screenHeight = window.innerHeight;
    } catch (err) { }
  }

  scroll(px: number): void {
    window.scrollTo({
      top: px,
      behavior: 'smooth'
    });
  }
}
