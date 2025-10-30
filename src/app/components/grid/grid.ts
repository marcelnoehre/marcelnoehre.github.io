import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { Data } from '../../services/data';
import { GridItem } from '../../interfaces/grid-item';

@Component({
  selector: 'app-grid',
  imports: [MatCardModule],
  templateUrl: './grid.html',
  styleUrl: './grid.scss'
})
export class Grid {
  public grid: GridItem[] = [];

  constructor(
    private _data: Data
  ) { }

  ngOnInit() {
    this.grid = this._data.grid;
  }

  redirect(url: string, target: string): void {
    if (!url) return;
    window.open(url, target);
  }
}
