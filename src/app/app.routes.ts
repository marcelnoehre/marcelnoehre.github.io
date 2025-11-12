import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Cv } from './pages/cv/cv';

export const routes: Routes = [
    { path: '', component: Home },
    { path: 'cv', component: Cv }
];
