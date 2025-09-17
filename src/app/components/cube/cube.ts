import { Component, OnInit } from '@angular/core';
import { Screen } from '../../services/screen';
import { CubeSide } from '../../interfaces/cube-side';
import { Data } from '../../services/data';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cube',
  imports: [CommonModule],
  templateUrl: './cube.html',
  styleUrl: './cube.scss'
})
export class Cube implements OnInit {
  protected height: number = 0;
  protected scrollY: number = 0;
  public cube: CubeSide[] = [];

  constructor(
    private _screen: Screen,
    private _data: Data
  ) { }

  ngOnInit(): void {
    this._screen.height$.subscribe(height => this.height = height);
    this._screen.scrollY$.subscribe(scrollY => this.scrollY = scrollY);
    this.cube = this._data.cube;
  }

  protected rotate(): number {
    if (this.scrollY <= (this.height * 0.4)) return 1;
    return 1 + (this.scrollY - (this.height * 0.4)) * 0.01;
  }

  protected opacity(): number {
    if (this.scrollY <= this.height) return 1;
    if (this.scrollY >= this.height * 1.1) return 0;
    return 1 - (this.scrollY - this.height) / (this.height * 0.1);
  }
}
