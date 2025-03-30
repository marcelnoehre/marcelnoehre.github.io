import { Component } from '@angular/core';
import { ProjectWallpaperComponent } from '../../../components/shared/project-wallpaper/project-wallpaper.component';
import { MatCardModule } from '@angular/material/card';
import { ScreenDirective } from '../../../directives/screen.directive';
import { ContactComponent } from '../../../components/shared/contact/contact.component';
import { ScrollbarComponent } from '../../../components/shared/scrollbar/scrollbar.component';

@Component({
  selector: 'app-swagger-for-aas',
  standalone: true,
  imports: [ProjectWallpaperComponent, MatCardModule, ContactComponent, ScrollbarComponent, ScreenDirective],
  providers: [ScreenDirective],
  templateUrl: './swagger-for-aas.component.html',
  styleUrl: './swagger-for-aas.component.scss'
})
export class SwaggerForAasComponent {
  public wallpaper: string = 'assets/images/projects/swagger-for-aas/swagger-for-aas-wallpaper.jpg';
  public scrollY: number = 0;
  public screenHeight: number = 0;
  public minScroll: number = 2;
}
