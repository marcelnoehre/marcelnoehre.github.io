import { Component } from '@angular/core';
import { MenuComponent } from '../menu/menu.component';
import { ScreenDirective } from '../../directives/screen.directive';

@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [MenuComponent, ScreenDirective],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.scss'
})
export class ToolbarComponent {
  public screenHeight: number = 0;
  public screenWidth: number = 0;

}
