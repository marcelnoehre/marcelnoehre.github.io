import { Component } from '@angular/core';
import { ScreenDirective } from '../../directives/screen.directive';
import { ToolbarComponent } from '../../components/shared/toolbar/toolbar.component';
import { ContactComponent } from '../../components/shared/contact/contact.component';
import { ScrollbarComponent } from '../../components/shared/scrollbar/scrollbar.component';
import { Project } from '../../interfaces/Project.interface';
import { DataService } from '../../services/data.service';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { CarouselWrapperComponent } from '../../components/shared/carousel-wrapper/carousel-wrapper.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [MatButtonModule, MatIconModule, ToolbarComponent, CarouselWrapperComponent, ContactComponent, ScrollbarComponent, ScreenDirective],
  providers: [ScreenDirective],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  public screenWidth: number = 0;
  public screenHeight: number = 0;
  public scrollY: number = 0;
  public projects: Project[] = this._data.projects.filter(project => project.title !== 'center');

  constructor(
    private _data: DataService
  ) { }

  openUrl(url: string, target: string = '_self') {
    if (url) {
      window.open(url, target);
    }
  }

}
