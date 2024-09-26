import { Routes } from '@angular/router';
import { CoreComponent } from './pages/core/core.component';
import { ComingSoonComponent } from './pages/coming-soon/coming-soon.component';
import { ImpressumComponent } from './pages/impressum/impressum.component';
import { NycTaxiAnalysisComponent } from './pages/projects/nyc-taxi-analysis/nyc-taxi-analysis.component';

export const routes: Routes = [
    { path: '', component: CoreComponent },
    { path: 'impressum', component: ImpressumComponent },
    { path: 'coming-soon', component: ComingSoonComponent },
    { path: 'projects', children: [
        { path: 'nyc-taxi-analysis', component: NycTaxiAnalysisComponent }
    ]},
    { path: '**', redirectTo: '' }
];

