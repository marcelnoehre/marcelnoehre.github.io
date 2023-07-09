import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Project } from 'src/app/interfaces/project';
import { BreakpointService } from 'src/app/services/breakpoint.service';

@Component({
  selector: 'app-projects-overview',
  templateUrl: './projects-overview.component.html',
  styleUrls: ['./projects-overview.component.scss']
})
export class ProjectsOverviewComponent implements OnInit {
  responsiveClass!: string;
  projects: Project[] = [
    {
      key: 'SWAGGER',
      path: '/coming-soon',
    },    
    {
      key: 'OVERLAY',
      path: '/coming-soon',
    },
    {
      key: 'MVB',
      path: 'https://musikverein-borsum.de',
    },
    {
      key: 'MORE',
      path: 'https://github.com/marcelnoehre?tab=repositories',
    }
  ];


  constructor(
    private router: Router,
    private _breakpoint: BreakpointService
    ) { }

  ngOnInit(): void {
    this._breakpoint.responsiveClass$.subscribe((responsiveClass) => {
      this.responsiveClass = responsiveClass;
    });
  }

  viewProject(path: string) {
    if(path.startsWith('/')) {
      this.router.navigateByUrl(path);
    } else {
      window.open(path, "_blank");
    }
  }

}
