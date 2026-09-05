import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./pages/home/home').then((m) => m.Home) },
  { path: 'cv', loadComponent: () => import('./pages/cv/cv').then((m) => m.Cv) },
  {
    path: 'projects',
    loadComponent: () => import('./pages/coming-soon/coming-soon').then((m) => m.ComingSoon),
    data: { title: 'Projects' },
  },
  {
    path: 'publications',
    loadComponent: () => import('./pages/coming-soon/coming-soon').then((m) => m.ComingSoon),
    data: { title: 'Publications' },
  },
  { path: '**', redirectTo: '' },
];
