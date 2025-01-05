import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-carousel-wrapper',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carousel-wrapper.component.html',
  styleUrl: './carousel-wrapper.component.scss'
})
export class CarouselWrapperComponent {
  @Input() public title: string = '';
  @Input() public position: string = '';
}
