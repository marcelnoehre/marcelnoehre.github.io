import { AfterViewInit, Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';

interface CV {
  date: string;
  description: string;
}

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [MatCardModule, MatDividerModule],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})
export class AboutMeComponent implements AfterViewInit {
  @Input() public scrollY: number = 0;
  @Input() public screenHeight: number = 0;
  public cv: CV[] = [
    { date: '2019 - 2023', description: 'B.Sc. Applied Computer Science (University of Hildesheim)'},
    { date: 'Since 2023', description: 'M.Sc. Applied Computer Science (University of Hildesheim)'},
    { date: '2021 (3 month)', description: 'Internship (Youco GmbH)' },
    { date: '2022 & 2023', description: 'Teaching Assistant - Java (University of Hildesheim)' },
    { date: 'Since 2021', description: 'Working Student (Entiac GmbH)' }
  ];

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
