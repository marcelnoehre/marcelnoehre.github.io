import { AfterViewInit, Component, Input } from '@angular/core';

@Component({
  selector: 'app-cube',
  standalone: true,
  imports: [],
  templateUrl: './cube.component.html',
  styleUrl: './cube.component.scss'
})
export class CubeComponent implements AfterViewInit {
  @Input() public scrollY: number = 0;

  ngAfterViewInit() {
    try { 
      this.scrollY = window.scrollY
    } catch (err) { }
  }

  rotateMultiplier(): number {
    if (this.scrollY <= 300) return 1;
    if (this.scrollY >= 1000) 1 + (this.scrollY - 300) * 0.02;
    return 1 + (this.scrollY - 300) * 0.01;
  }

}
