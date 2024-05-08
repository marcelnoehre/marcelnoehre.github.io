import { AfterViewInit, Component, Input } from '@angular/core';

export interface Project {
  title: string;
  image: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent implements AfterViewInit {
  @Input() public scrollY: number = 0;
  public projects: Project[] = [{
    title: 'Rocket League Custom Overlay',
    image: 'assets/images/projects/rl-overlay.jpg'
  }, {
    title: 'Swagger Generator for an Asset Administration Shell',
    image: 'assets/images/projects/swagger-for-aas.jpg'
  }, {
    title: 'Analysis of Taxi trips in New York City',
    image: 'assets/images/projects/nyc-taxi-analysis.jpg'
  }, {
    title: 'Multi Agent System for Poker',
    image: 'assets/images/projects/poker-mas.jpg'
  }, {
    title: 'CBR-based hint system for Minesweeper',
    image: 'assets/images/projects/cbr-minesweeper.jpg'
  }, {
    title: 'MVB Website',
    image: 'assets/images/projects/mvb-website.jpg'
  }, {
    title: 'Platform for Discord bots',
    image: 'assets/images/projects/discord-bots.jpg'
  }, {
    title: 'See more',
    image: 'assets/images/projects/see-more.jpg'
  }];

  ngAfterViewInit() {
    try { 
      this.scrollY = window.scrollY
    } catch (err) { }
  }

}
