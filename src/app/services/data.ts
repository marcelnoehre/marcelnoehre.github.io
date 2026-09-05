import { Service, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { NavigationItem } from '../interfaces/navigation-item';
import { HomeItem } from '../interfaces/home-item';

@Service()
export class Data {
  private readonly http = inject(HttpClient);

  navigation(): Observable<NavigationItem[]> {
    return this.http
      .get<{ navigation: NavigationItem[] }>('data/navigation.json')
      .pipe(map((data) => data.navigation));
  }

  home(): Observable<HomeItem> {
    return this.http.get<HomeItem>('data/home.json');
  }
}
