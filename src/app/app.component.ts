import { AfterViewInit, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import Blobity from 'blobity';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements AfterViewInit {
  title = 'Marcel Nöhre';

  ngAfterViewInit(): void {
    try { 
      new Blobity({
        licenseKey: '...',
        dotColor: "#7b68ee",
        focusableElementsOffsetX: 5,
        focusableElementsOffsetY: 5,
        color: "#7b68ee",
        opacity: 0.25,
        magnetic: true,
        radius: 5,
        zIndex: 1000,
        dotSize: 10
      });
    } catch (err) { }
  }
}
