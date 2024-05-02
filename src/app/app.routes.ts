import { Routes } from '@angular/router';
import { CoreComponent } from './components/core/core.component';

export const routes: Routes = [
    { path: '', component: CoreComponent },
    { path: '**', redirectTo: '' }
];
