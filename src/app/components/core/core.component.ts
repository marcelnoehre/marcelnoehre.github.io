import { Component } from '@angular/core';
import { LandingPageComponent } from '../landing-page/landing-page.component';

@Component({
  selector: 'app-core',
  standalone: true,
  imports: [LandingPageComponent],
  templateUrl: './core.component.html',
  styleUrl: './core.component.scss'
})
export class CoreComponent {

}
