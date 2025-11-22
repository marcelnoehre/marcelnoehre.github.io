import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Cv } from './pages/cv/cv';
import { Publications } from './pages/publications/publications';
import { Projects } from './pages/projects/projects';

export const routes: Routes = [
    { path: '', component: Home, data: { scrollPosition: 'top' } },
    { path: 'publications', component: Publications, data: { scrollPosition: 'top' } },
    { path: 'projects', component: Projects, data: { scrollPosition: 'top' } },
    { path: 'cv', component: Cv, data: { scrollPosition: 'top' } }
];
