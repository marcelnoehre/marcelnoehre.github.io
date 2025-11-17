import { Injectable } from '@angular/core';
import { NavigationItem } from '../interfaces/navigation-item';
import { CubeSide } from '../interfaces/cube-side';
import { PersonalItem } from '../interfaces/personal-item';
import { WorkItem } from '../interfaces/work-item';
import { GridItem } from '../interfaces/grid-item';
import { ContactItem } from '../interfaces/contact-item';
import { ProjectItem } from '../interfaces/project-item';
import { ExperienceItem } from '../interfaces/experience-item';
import { EducationItem } from '../interfaces/education-item';

import * as navData from '../../assets/data/navigation.json';
import * as cubeData from '../../assets/data/cube.json';
import * as aboutData from '../../assets/data/about.json'
import * as gridData from '../../assets/data/grid.json';
import * as contactData from '../../assets/data/contact.json';
import * as projectData from '../../assets/data/projects.json';
import * as cvData from '../../assets/data/cv.json';

@Injectable({
  providedIn: 'root'
})
export class Data {

  public get navigation(): NavigationItem[] {
    return navData.navigation;
  }

  public get cube(): CubeSide[] {
    return cubeData.sides;
  }

  public get personal(): PersonalItem[] {
    return aboutData.personal;
  }

  public get work(): WorkItem {
    return aboutData.work;
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
