import { Component } from '@angular/core';
import { ScrollDirective } from '../../directives/scroll.directive';

@Component({
  selector: 'app-core',
  standalone: true,
  imports: [ScrollDirective],
  providers: [ScrollDirective],
  templateUrl: './core.component.html',
  styleUrl: './core.component.scss'
})
export class CoreComponent {

  onScroll(scrollY: number) {
    console.log('scrollY', scrollY);
  }

}
