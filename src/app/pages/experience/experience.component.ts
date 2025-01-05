import { Component } from '@angular/core';
import { ScreenDirective } from '../../directives/screen.directive';
import { ToolbarComponent } from '../../components/shared/toolbar/toolbar.component';
import { ContactComponent } from '../../components/shared/contact/contact.component';
import { ScrollbarComponent } from '../../components/shared/scrollbar/scrollbar.component';
import { CarouselWrapperComponent } from '../../components/shared/carousel-wrapper/carousel-wrapper.component';
import { CvItem } from '../../interfaces/CvItem.interface';
import { DataService } from '../../services/data.service';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [MatButtonModule, MatIconModule, ToolbarComponent, CarouselWrapperComponent, ContactComponent, ScrollbarComponent, ScreenDirective],
  providers: [ScreenDirective],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent {
  public screenWidth: number = 0;
  public screenHeight: number = 0;
  public scrollY: number = 0;
  public study: CvItem[] = this._data.study;
  public work: CvItem[] = this._data.work;

  constructor(private _data: DataService) { }

  redirect(url: string): void {
    window.open(url, '_blank');
  }
}
