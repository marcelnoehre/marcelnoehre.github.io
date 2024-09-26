import { Component } from '@angular/core';
import { ScreenDirective } from '../../directives/screen.directive';
import { ScrollbarComponent } from '../../components/shared/scrollbar/scrollbar.component';
import { AboutMeComponent } from '../../components/core/about-me/about-me.component';
import { ContactComponent } from '../../components/core/contact/contact.component';
import { CubeComponent } from '../../components/core/cube/cube.component';
import { GridComponent } from '../../components/core/grid/grid.component';
import { LandingPageComponent } from '../../components/core/landing-page/landing-page.component';
import { ProjectsComponent } from '../../components/core/projects/projects.component';

@Component({
  selector: 'app-core',
  standalone: true,
  imports: [LandingPageComponent, CubeComponent, AboutMeComponent, ProjectsComponent, GridComponent, ContactComponent, ScrollbarComponent, ScreenDirective],
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
