import { AfterViewInit, Component, Input } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Project } from '../../interfaces/Project';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent implements AfterViewInit {
  @Input() public scrollY: number = 0;
  public projects: Project[] = this._data.projects;

  constructor(
    private _data: DataService
  ) { }

  ngAfterViewInit() {
    try { 
      this.scrollY = window.scrollY;
    } catch (err) { }
  }

}
