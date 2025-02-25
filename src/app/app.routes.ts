import { Routes } from '@angular/router';
import { CoreComponent } from './pages/core/core.component';
import { ComingSoonComponent } from './pages/coming-soon/coming-soon.component';
import { ImpressumComponent } from './pages/impressum/impressum.component';
import { NycTaxiAnalysisComponent } from './pages/projects/nyc-taxi-analysis/nyc-taxi-analysis.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ExperienceComponent } from './pages/experience/experience.component';
import { SwaggerForAasComponent } from './pages/projects/swagger-for-aas/swagger-for-aas.component';

export const routes: Routes = [
    { path: '', component: CoreComponent },
    { path: 'experience', component: ExperienceComponent },
    { path: 'projects', children: [
        { path: '', component: ProjectsComponent},
        { path: 'nyc-taxi-analysis', component: NycTaxiAnalysisComponent },
        { path: 'swagger-for-aas', component: SwaggerForAasComponent }
    ]},
    { path: 'impressum', component: ImpressumComponent },
    { path: 'coming-soon', component: ComingSoonComponent },
    { path: '**', redirectTo: '' }
];

