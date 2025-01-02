import { Component } from '@angular/core';
import { ProjectWallpaperComponent } from '../../../components/shared/project-wallpaper/project-wallpaper.component';
import { MatCardModule } from '@angular/material/card';
import { ContactComponent } from '../../../components/core/contact/contact.component';
import { ScreenDirective } from '../../../directives/screen.directive';
import { ScrollbarComponent } from '../../../components/shared/scrollbar/scrollbar.component';

@Component({
  selector: 'app-nyc-taxi-analysis',
  standalone: true,
  imports: [ProjectWallpaperComponent, MatCardModule, ContactComponent, ScrollbarComponent, ScreenDirective],
  providers: [ScreenDirective],
  templateUrl: './nyc-taxi-analysis.component.html',
  styleUrl: './nyc-taxi-analysis.component.scss'
})
export class NycTaxiAnalysisComponent {
  public wallpaper: string = 'assets/images/projects/nyc-taxi-analysis/nyc-taxi-analysis-wallpaper.jpg';
  public scrollY: number = 0;
  public screenHeight: number = 0;
}
