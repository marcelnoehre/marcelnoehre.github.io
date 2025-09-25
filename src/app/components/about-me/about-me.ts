import { Component } from '@angular/core';
import { Screen } from '../../services/screen';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-about-me',
  imports: [MatCardModule],
  templateUrl: './about-me.html',
  styleUrl: './about-me.scss'
})
export class AboutMe {
  protected width: number = 0;
  protected height: number = 0;
  protected scrollY: number = 0;

  constructor(
    private _screen: Screen
  ) { }

  ngOnInit(): void {
    this._screen.width$.subscribe(width => this.width = width);
    this._screen.height$.subscribe(height => this.height = height);
    this._screen.scrollY$.subscribe(scrollY => this.scrollY = scrollY);
  }

  protected cardDegree(): string {
    if (this.scrollY <= (this.height * 0.7)) return '90deg';
    if (this.scrollY >= (this.height * 1.2)) return '0deg';
    return (90 * (this.height * 1.2 - this.scrollY) / (this.height * 1.2 - this.height * 0.7)) + 'deg';
  }

  protected cardFade(): number {
    if (this.scrollY <= (this.height * 0.7)) return 0;
    if (this.scrollY >= this.height) return 1;
    return 1 - (this.height - this.scrollY) / (this.height - this.height * 0.7);
  }

  protected cardScale(): number {
    if (this.scrollY <= (this.height * 0.7)) return 0;
    if (this.scrollY >= this.height * 1.3) return 1;
    return 1 - (this.height * 1.3 - this.scrollY) / (this.height * 1.3 - this.height * 0.7);
  }

}
