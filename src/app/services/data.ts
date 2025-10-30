import { Injectable } from '@angular/core';
import { CubeSide } from '../interfaces/cube-side';
import { GridItem } from '../interfaces/grid-item';

import * as cubeData from '../../assets/data/cube.json';
import * as gridData from '../../assets/data/grid.json';

@Injectable({
  providedIn: 'root'
})
export class Data {

  public get cube(): CubeSide[] {
    return cubeData.sides;
  }

  public get grid(): GridItem[] {
    return gridData.items;
  }

}
