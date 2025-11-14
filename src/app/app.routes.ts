import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Cv } from './pages/cv/cv';
import { Publications } from './pages/publications/publications';

export const routes: Routes = [
    { path: '', component: Home },
    { path: 'publications', component: Publications },
    { path: 'cv', component: Cv }
];
