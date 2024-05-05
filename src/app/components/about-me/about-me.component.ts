import { AfterViewInit, Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})
export class AboutMeComponent implements AfterViewInit {
  @Input() public scrollY: number = 0;
  @Input() public screenHeight: number = 0;

  ngAfterViewInit() {
    try { 
      this.scrollY = window.scrollY
      this.screenHeight = window.innerHeight;
    } catch (err) { }
  }

  cardDegree(): string {
    if (this.scrollY <= (this.screenHeight * 0.7)) return '90deg';
    if (this.scrollY >= (this.screenHeight * 1.2)) return '0deg';
    return (90 * (this.screenHeight * 1.2 - this.scrollY) / (this.screenHeight * 1.2 - this.screenHeight * 0.7)) + 'deg';
  }

  cardFade(): number {
    if (this.scrollY <= (this.screenHeight * 0.7)) return 0;
    if (this.scrollY >= this.screenHeight) return 1;
    return 1 - (this.screenHeight - this.scrollY) / (this.screenHeight - this.screenHeight * 0.7);
  }
}
