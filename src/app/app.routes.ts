import { Routes } from '@angular/router';
import { CoreComponent } from './components/core/core.component';
import { ComingSoonComponent } from './components/coming-soon/coming-soon.component';

export const routes: Routes = [
    { path: '', component: CoreComponent },
    { path: 'coming-soon', component: ComingSoonComponent },
    { path: '**', redirectTo: '' }
];
