import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-coming-soon',
  standalone: true,
  imports: [MatButtonModule, MatIconModule],
  templateUrl: './coming-soon.component.html',
  styleUrl: './coming-soon.component.scss'
})
export class ComingSoonComponent {
  constructor(
    private location: Location
  ) {
  }

  public close(): void {
    this.location.back();
  }
}
