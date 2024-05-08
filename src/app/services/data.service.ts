import { Injectable } from '@angular/core';
import * as cubeData from '../../assets/data/cube.json';
import * as aboutData from '../../assets/data/about.json';
import * as projectsData from '../../assets/data/projects.json';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  public get cube() {
    return cubeData.sides;
  }

  public get work() {
    return aboutData.work;
  }

  public get projects() {
    return projectsData.projects;
  }

}
