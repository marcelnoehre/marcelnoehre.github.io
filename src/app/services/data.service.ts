import { Injectable } from '@angular/core';
import { CubeSide } from '../interfaces/CubeSide.interface';
import { CvItem } from '../interfaces/CvItem.interface';
import { Project } from '../interfaces/Project.interface';
import { Contact } from '../interfaces/Contact.interface';
import * as cubeData from '../../assets/data/cube.json';
import * as experienceData from '../../assets/data/experience.json';
import * as projectsData from '../../assets/data/projects.json';
import * as gridData from '../../assets/data/grid.json';
import * as contactData from '../../assets/data/contact.json';
import { GridItem } from '../interfaces/GridItem.interface';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  public get cube(): CubeSide[] {
    return cubeData.sides;
  }

  public get study(): CvItem[] {
    return experienceData.study;
  }

  public get work(): CvItem[] {
    return experienceData.work;
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
