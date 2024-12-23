import { Component } from '@angular/core';
import { ProjectWallpaperComponent } from '../../../components/shared/project-wallpaper/project-wallpaper.component';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-nyc-taxi-analysis',
  standalone: true,
  imports: [ProjectWallpaperComponent, MatCardModule],
  templateUrl: './nyc-taxi-analysis.component.html',
  styleUrl: './nyc-taxi-analysis.component.scss'
})
export class NycTaxiAnalysisComponent {
  public wallpaper: string = 'assets/images/projects/nyc-taxi-analysis/nyc-taxi-analysis-wallpaper.jpg';
}
