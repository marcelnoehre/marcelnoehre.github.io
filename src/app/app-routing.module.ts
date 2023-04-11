import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CoreComponent } from './components/core/core.component';
import { RLOverlayComponent } from './components/rl-overlay/rl-overlay.component';

const routes: Routes = [  
  { path: '', component: CoreComponent },
  { path: 'rl-overlay', component: RLOverlayComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
