import { Injectable } from '@angular/core';
import { CubeSide } from '../interfaces/cube-side';
import { GridItem } from '../interfaces/grid-item';
import { ContactItem } from '../interfaces/contact-item';
import { ExperienceItem } from '../interfaces/experience-item';
import { EducationItem } from '../interfaces/education-item';

import * as cubeData from '../../assets/data/cube.json';
import * as gridData from '../../assets/data/grid.json';
import * as contactData from '../../assets/data/contact.json';
import * as projectData from '../../assets/data/projects.json';
import * as cvData from '../../assets/data/cv.json';
import { ProjectItem } from '../interfaces/project-item';

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

  public get contact(): ContactItem[] {
    return contactData.socials;
  }

  public get projects(): ProjectItem[] {
    return projectData.projects;
  }

  public get experience(): ExperienceItem[] {
    return cvData.experience;
  }

  public get education(): EducationItem[] {
    return cvData.education;
  }

}
