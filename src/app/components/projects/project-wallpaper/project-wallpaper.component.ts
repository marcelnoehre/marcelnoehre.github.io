import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-project-wallpaper',
  standalone: true,
  imports: [],
  templateUrl: './project-wallpaper.component.html',
  styleUrl: './project-wallpaper.component.scss'
})
export class ProjectWallpaperComponent {
  @Input() public wallpaper!: string;
}
