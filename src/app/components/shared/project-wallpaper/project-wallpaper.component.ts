import { Component, Input } from '@angular/core';
import { ScreenDirective } from '../../../directives/screen.directive';
import { ToolbarComponent } from '../toolbar/toolbar.component';

@Component({
  selector: 'app-project-wallpaper',
  standalone: true,
  imports: [ToolbarComponent, ScreenDirective],
  providers: [ScreenDirective],
  templateUrl: './project-wallpaper.component.html',
  styleUrl: './project-wallpaper.component.scss'
})
export class ProjectWallpaperComponent {
  @Input() public wallpaper!: string;
  public screenWidth: number = 0;
  public screenHeight: number = 0;
}
