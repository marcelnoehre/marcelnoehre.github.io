import { Injectable } from '@angular/core';
import { CubeSide } from '../interfaces/CubeSide';
import { CvItem } from '../interfaces/CvItem';
import { Project } from '../interfaces/Project';
import { Contact } from '../interfaces/Contact';
import * as cubeData from '../../assets/data/cube.json';
import * as aboutData from '../../assets/data/about.json';
import * as projectsData from '../../assets/data/projects.json';
import * as gridData from '../../assets/data/grid.json';
import * as contactData from '../../assets/data/contact.json';
import { GridItem } from '../interfaces/GridItem';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  public get cube(): CubeSide[] {
    return cubeData.sides;
  }

  public get work(): CvItem[] {
    return aboutData.work;
  }

  public get projects(): Project[] {
    return projectsData.projects;
  }

  public get grid(): GridItem[] {
    return gridData.items;
  }

  public get contact(): Contact[] {
    return contactData.platforms;
  }

}
