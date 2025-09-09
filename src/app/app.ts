import { AfterViewInit, Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Theme } from './services/theme';
import Blobity from 'blobity';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements AfterViewInit {
  protected readonly title = signal('Marcel Nöhre');

  constructor(public _: Theme) {}

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
