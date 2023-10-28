import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CoreComponent } from './components/core/core.component';
import { ComingSoonComponent } from './components/coming-soon/coming-soon.component';

const routes: Routes = [
  { path: '', component: CoreComponent },
  { path: 'coming-soon', component: ComingSoonComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
