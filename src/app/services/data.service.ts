import { Injectable } from '@angular/core';
import { CubeSide } from '../interfaces/CubeSide';
import { CvItem } from '../interfaces/CvItem';
import { Project } from '../interfaces/Project';
import { TechStack } from '../interfaces/TechStack';
import { Contact } from '../interfaces/Contact';
import * as cubeData from '../../assets/data/cube.json';
import * as aboutData from '../../assets/data/about.json';
import * as projectsData from '../../assets/data/projects.json';
import * as techstack from '../../assets/data/techstack.json';
import * as contactData from '../../assets/data/contact.json';

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

  public get techstack(): TechStack[] {
    return techstack.layers;
  }

  public get contact(): Contact[] {
    return contactData.platforms;
  }

}
