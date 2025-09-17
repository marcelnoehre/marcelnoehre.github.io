import { Injectable } from '@angular/core';
import { CubeSide } from '../interfaces/cube-side';

import * as cubeData from '../../assets/data/cube.json';

@Injectable({
  providedIn: 'root'
})
export class Data {

  public get cube(): CubeSide[] {
    return cubeData.sides;
  }
  
}
