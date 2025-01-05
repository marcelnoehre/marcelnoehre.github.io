import { Routes } from '@angular/router';
import { CoreComponent } from './pages/core/core.component';
import { ComingSoonComponent } from './pages/coming-soon/coming-soon.component';
import { ImpressumComponent } from './pages/impressum/impressum.component';
import { NycTaxiAnalysisComponent } from './pages/projects/nyc-taxi-analysis/nyc-taxi-analysis.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { AboutMeComponent } from './pages/about-me/about-me.component';

export const routes: Routes = [
    { path: '', component: CoreComponent },
    { path: 'about-me', component: AboutMeComponent },
    { path: 'projects', children: [
        { path: '', component: ProjectsComponent},
        { path: 'nyc-taxi-analysis', component: NycTaxiAnalysisComponent }
    ]},
    { path: 'impressum', component: ImpressumComponent },
    { path: 'coming-soon', component: ComingSoonComponent },
    { path: '**', redirectTo: '' }
];

