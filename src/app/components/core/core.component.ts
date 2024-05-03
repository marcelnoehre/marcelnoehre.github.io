import { Component } from '@angular/core';
import { ScrollDirective } from '../../directives/scroll.directive';
import { LandingPageComponent } from '../landing-page/landing-page.component';
import { CubeComponent } from '../cube/cube.component';

@Component({
  selector: 'app-core',
  standalone: true,
  imports: [LandingPageComponent, CubeComponent, ScrollDirective],
  providers: [ScrollDirective],
  templateUrl: './core.component.html',
  styleUrl: './core.component.scss'
})
export class CoreComponent {

  onScroll(scrollY: number) {
    console.log('scrollY', scrollY);
  }

}
