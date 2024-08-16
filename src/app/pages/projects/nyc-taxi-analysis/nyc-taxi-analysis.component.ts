import { Component } from '@angular/core';
import { ToolbarComponent } from '../../../components/toolbar/toolbar.component';
import { ProjectWallpaperComponent } from '../../../components/projects/project-wallpaper/project-wallpaper.component';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-nyc-taxi-analysis',
  standalone: true,
  imports: [ToolbarComponent, ProjectWallpaperComponent, MatCardModule],
  templateUrl: './nyc-taxi-analysis.component.html',
  styleUrl: './nyc-taxi-analysis.component.scss'
})
export class NycTaxiAnalysisComponent {
  public wallpaper: string = 'assets/images/project/nyc-taxi-analysis-wallpaper.jpg';
}
