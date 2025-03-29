import { Component } from '@angular/core';
import { ProjectWallpaperComponent } from '../../../components/shared/project-wallpaper/project-wallpaper.component';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-swagger-for-aas',
  standalone: true,
  imports: [ProjectWallpaperComponent, MatCardModule],
  templateUrl: './swagger-for-aas.component.html',
  styleUrl: './swagger-for-aas.component.scss'
})
export class SwaggerForAasComponent {
  public wallpaper: string = 'assets/images/projects/swagger-for-aas/swagger-for-aas-wallpaper.jpg';

}
