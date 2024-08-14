import { AfterViewInit, Component, Input } from '@angular/core';
import { Project } from '../../../interfaces/Project';
import { DataService } from '../../../services/data.service';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent implements AfterViewInit {
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
