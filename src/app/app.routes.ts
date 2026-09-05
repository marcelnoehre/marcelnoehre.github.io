import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./pages/home/home').then((m) => m.Home) },
  { path: 'cv', loadComponent: () => import('./pages/cv/cv').then((m) => m.Cv) },
  {
    path: 'repositories',
    loadComponent: () => import('./pages/repositories/repositories').then((m) => m.Repositories),
  },
  {
    path: 'publications',
    loadComponent: () => import('./pages/publications/publications').then((m) => m.Publications),
  },
  { path: '**', redirectTo: '' },
];
