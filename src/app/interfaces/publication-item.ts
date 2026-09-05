export interface PublicationItem {
  authors: string;
  year: string;
  published: string;
  title: string;
  doi: string;
  bibtex: string;
  image?: string;
  abstract?: string[];
  selected?: boolean;
  award?: string;
}
