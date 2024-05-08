import { AfterViewInit, Component, Input } from '@angular/core';
import { DataService } from '../../services/data.service';
import { NgClass } from '@angular/common';
import { CubeSide } from '../../interfaces/CubeSide';

@Component({
  selector: 'app-cube',
  standalone: true,
  imports: [NgClass],
  templateUrl: './cube.component.html',
  styleUrl: './cube.component.scss'
})
export class CubeComponent implements AfterViewInit {
  @Input() public scrollY: number = 0;
  @Input() public screenHeight: number = 0;
  public cube: CubeSide[] = this._data.cube;

  constructor(
    private _data: DataService
  ) { }

  ngAfterViewInit() {
    try { 
      this.scrollY = window.scrollY
      this.screenHeight = window.innerHeight;
    } catch (err) { }
  }

  rotate(): number {
    if (this.scrollY <= (this.screenHeight * 0.4)) return 1;
    return 1 + (this.scrollY - (this.screenHeight * 0.4)) * 0.01;
  }

  opacity(): number {
    if (this.scrollY <= this.screenHeight) return 1;
    if (this.scrollY >= this.screenHeight * 1.1) return 0;
    return 1 - (this.scrollY - this.screenHeight) / (this.screenHeight * 0.1);
  }

}
