import { Component } from '@angular/core';
import { Screen } from '../../services/screen';
import { MatCardModule } from '@angular/material/card';
import { PersonalItem } from '../../interfaces/personal-item';
import { WorkItem } from '../../interfaces/work-item';
import { Data } from '../../services/data';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-about-me',
  imports: [MatCardModule, MatIconModule],
  templateUrl: './about-me.html',
  styleUrl: './about-me.scss'
})
export class AboutMe {
  private _basePath: string = 'assets/images/about/'
  protected width: number = 0;
  protected height: number = 0;
  protected scrollY: number = 0;
  protected cardImage: string = this._basePath + 'me.jpg';
  protected personal: PersonalItem[] = [];
  protected work!: WorkItem;

  constructor(
    private _screen: Screen,
    private _data: Data
  ) { }

  ngOnInit(): void {
    this._screen.width$.subscribe(width => {
      this.width = width;
      this.cardImage = this._basePath + (width > 768 ? 'me.jpg' : 'click-me.jpeg');
    });
    this._screen.height$.subscribe(height => this.height = height);
    this._screen.scrollY$.subscribe(scrollY => this.scrollY = scrollY);
    this.personal = this._data.personal;
    this.work = this._data.work;
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
