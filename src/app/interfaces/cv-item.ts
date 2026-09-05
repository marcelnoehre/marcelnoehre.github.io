import { ExperienceItem } from './experience-item';
import { EducationItem } from './education-item';

export interface CvItem {
  experience: ExperienceItem[];
  education: EducationItem[];
}
