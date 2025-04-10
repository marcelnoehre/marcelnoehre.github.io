import { NgClass } from '@angular/common';
import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import lottie from 'lottie-web';
import { MenuComponent } from '../../shared/menu/menu.component';
import { ToolbarComponent } from '../../shared/toolbar/toolbar.component';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [MatButtonModule, MatIconModule, NgClass, MenuComponent, ToolbarComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent implements AfterViewInit {
  @ViewChild('scrollDown', { static: true }) animationContainer!: ElementRef;
  @Input() public scrollY: number = 0;
  @Input() public screenWidth: number = 0;
  @Input() public screenHeight: number = 0;

  ngOnInit(): void {
    try {
      lottie.loadAnimation({
        container: this.animationContainer.nativeElement,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'assets/images/icons/scroll-down.json'
      });
    } catch (err) { }
  }

  ngAfterViewInit() {
    try { 
      this.screenWidth = window.innerWidth;
      this.screenHeight = window.innerHeight;
    } catch (err) { }
  }
}
