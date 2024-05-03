import { Component } from '@angular/core';
import { ScreenDirective } from '../../directives/screen.directive';
import { LandingPageComponent } from '../landing-page/landing-page.component';
import { CubeComponent } from '../cube/cube.component';

@Component({
  selector: 'app-core',
  standalone: true,
  imports: [LandingPageComponent, CubeComponent, ScreenDirective],
  providers: [ScreenDirective],
  templateUrl: './core.component.html',
  styleUrl: './core.component.scss'
})
export class CoreComponent {
  public scrollX: number = 0;
  public scrollY: number = 0;
  public screenWidth: number = 0;
  public screenHeight: number = 0;

}
