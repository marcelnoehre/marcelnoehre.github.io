import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-projects-overview',
  templateUrl: './projects-overview.component.html',
  styleUrls: ['./projects-overview.component.scss']
})
export class ProjectsOverviewComponent implements OnInit {
  projects: String[] = ['SWAGGER', 'OVERLAY', 'MVB', 'MORE']

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  viewProject(path: string) {
    this.router.navigateByUrl(path);
  }

}
