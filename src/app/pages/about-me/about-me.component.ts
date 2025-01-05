import { Component } from '@angular/core';
import { ScreenDirective } from '../../directives/screen.directive';
import { ToolbarComponent } from '../../components/shared/toolbar/toolbar.component';
import { ContactComponent } from '../../components/core/contact/contact.component';
import { ScrollbarComponent } from '../../components/shared/scrollbar/scrollbar.component';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [ToolbarComponent, ContactComponent, ScrollbarComponent, ScreenDirective],
  providers: [ScreenDirective],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})
export class AboutMeComponent {
  public screenWidth: number = 0;
  public screenHeight: number = 0;
  public scrollY: number = 0;
}
