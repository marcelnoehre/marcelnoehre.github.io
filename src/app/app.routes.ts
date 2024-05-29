import { Routes } from '@angular/router';
import { CoreComponent } from './components/core/core.component';
import { ComingSoonComponent } from './components/coming-soon/coming-soon.component';
import { ImpressumComponent } from './components/impressum/impressum.component';

export const routes: Routes = [
    { path: '', component: CoreComponent },
    { path: 'impressum', component: ImpressumComponent },
    { path: 'coming-soon', component: ComingSoonComponent },
    { path: '**', redirectTo: '' }
];
