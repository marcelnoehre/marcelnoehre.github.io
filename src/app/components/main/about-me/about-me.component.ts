import { NgClass } from '@angular/common';
import { AfterViewInit, Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { CvItem } from '../../../interfaces/CvItem';
import { FlipState } from '../../../interfaces/FlipState';
import { DataService } from '../../../services/data.service';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [MatCardModule, MatDividerModule, NgClass, MatButtonModule, MatIconModule],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})
export class AboutMeComponent implements AfterViewInit {
  @Input() public scrollY: number = 0;
  @Input() public screenWidth: number = 0;
  @Input() public screenHeight: number = 0;
  public work: CvItem[] = this._data.work;
  public flip: FlipState = {
    meFront: true,
    meBack: false
  };

  constructor(
    private _data: DataService
  ) { }

  ngAfterViewInit() {
    try { 
      this.scrollY = window.scrollY;
      this.screenWidth = window.innerWidth;
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

  redirect(url: string, event?: MouseEvent): void {
    event?.stopPropagation();
    window.open(url, '_blank');
  }

  flipCard(): void {
    this.flip.meFront = !this.flip.meFront;
    this.flip.meBack = !this.flip.meBack;
  }
}
