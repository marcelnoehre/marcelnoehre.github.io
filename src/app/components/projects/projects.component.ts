import { AfterViewInit, Component, Input } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent implements AfterViewInit {
  @Input() public scrollY: number = 0;

  ngAfterViewInit() {
    try { 
      this.scrollY = window.scrollY
    } catch (err) { }
  }

}
