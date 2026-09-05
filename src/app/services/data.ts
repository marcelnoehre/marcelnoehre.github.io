import { Service, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { NavigationItem } from '../interfaces/navigation-item';
import { HomeItem } from '../interfaces/home-item';
import { CvItem } from '../interfaces/cv-item';
import { PublicationsItem } from '../interfaces/publications-item';
import { PublicationItem } from '../interfaces/publication-item';
import { SocialItem } from '../interfaces/social-item';

@Service()
export class Data {
  private readonly http = inject(HttpClient);

  navigation(): Observable<NavigationItem[]> {
    return this.http
      .get<{ navigation: NavigationItem[] }>('data/navigation.json')
      .pipe(map((data) => data.navigation));
  }

  socials(): Observable<SocialItem[]> {
    return this.http
      .get<{ socials: SocialItem[] }>('data/social.json')
      .pipe(map((data) => data.socials));
  }

  home(): Observable<HomeItem> {
    return this.http.get<HomeItem>('data/home.json');
  }

  cv(): Observable<CvItem> {
    return this.http.get<CvItem>('data/cv.json');
  }

  publications(): Observable<PublicationsItem> {
    return this.http.get<PublicationsItem>('data/publications.json');
  }

  selectedPublications(): Observable<PublicationItem[]> {
    return this.publications().pipe(
      map((data) => data.publications.filter((publication) => publication.selected)),
    );
  }
}
