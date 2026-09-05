import { PublicationItem } from './publication-item';
import { AwardItem } from './award-item';

export interface PublicationsItem {
  publications: PublicationItem[];
  openData: PublicationItem[];
  awards: AwardItem[];
}
