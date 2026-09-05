import { Component, input } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-coming-soon',
  styleUrl: './coming-soon.scss',
  templateUrl: './coming-soon.html',
})
export class ComingSoon {
  readonly title = input('Coming soon');
}
