import { Component } from '@angular/core';
import { ScreenDirective } from '../../directives/screen.directive';
import { ScrollbarComponent } from '../../components/shared/scrollbar/scrollbar.component';
import { ExperienceCardComponent } from '../../components/core/experience-card/experience-card.component';
import { ContactComponent } from '../../components/shared/contact/contact.component';
import { CubeComponent } from '../../components/core/cube/cube.component';
import { GridComponent } from '../../components/core/grid/grid.component';
import { LandingPageComponent } from '../../components/core/landing-page/landing-page.component';
import { ProjectsGridComponent } from '../../components/core/projects-grid/projects-grid.component';

@Component({
  selector: 'app-core',
  standalone: true,
  imports: [LandingPageComponent, CubeComponent, ExperienceCardComponent, ProjectsGridComponent, GridComponent, ContactComponent, ScrollbarComponent, ScreenDirective],
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
