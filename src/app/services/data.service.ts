import { Injectable } from '@angular/core';
import * as projectsData from '../../assets/data/projects.json';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  public get projects() {
    return projectsData.projects;
  }

}
