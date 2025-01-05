import { AfterViewInit, Component, Input } from '@angular/core';
import { Project } from '../../../interfaces/Project.interface';
import { DataService } from '../../../services/data.service';
import { CarouselWrapperComponent } from '../../shared/carousel-wrapper/carousel-wrapper.component';

@Component({
  selector: 'app-projects-grid',
  standalone: true,
  imports: [CarouselWrapperComponent],
  templateUrl: './projects-grid.component.html',
  styleUrl: './projects-grid.component.scss'
})
export class ProjectsGridComponent implements AfterViewInit {
  @Input() public scrollY: number = 0;
  @Input() public screenWidth: number = 0;
  public projects: Project[] = this._data.projects;

  constructor(
    private _data: DataService
  ) { }

  ngAfterViewInit() {
    try { 
      this.scrollY = window.scrollY;
      this.screenWidth = window.innerWidth;
    } catch (err) { }
  }

}
