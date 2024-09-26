import { NgClass } from '@angular/common';
import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import lottie from 'lottie-web';
import { MenuComponent } from '../../shared/menu/menu.component';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [MatButtonModule, MatIconModule, MenuComponent, NgClass],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent implements AfterViewInit {
  @ViewChild('scrollDown', { static: true }) animationContainer!: ElementRef;
  @ViewChild(MenuComponent) menu!: MenuComponent;
  @Input() public scrollY: number = 0;
  @Input() public screenWidth: number = 0;
  @Input() public screenHeight: number = 0;

  constructor(
    private _router: Router
  ) { }

  ngOnInit(): void {
    try {
      lottie.loadAnimation({
        container: this.animationContainer.nativeElement,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'assets/images/scroll-down.json'
      });
    } catch (err) { }
  }

  ngAfterViewInit() {
    try { 
      this.screenWidth = window.innerWidth;
      this.screenHeight = window.innerHeight;
    } catch (err) { }
  }

  redirect(): void {
    this._router.navigate(['/impressum']);
  }

  scroll(target: string): void {
    let px;
    if (target === 'about') px = this.screenHeight * 1.2;
    if (target === 'projects') px = this.screenHeight * 2.25;
    if (target === 'contact') px = window.document.body.scrollHeight;
    window.scrollTo({
      top: px,
      behavior: 'smooth'
    });
  }

  toggleMobileMenu(): void {
    this.menu.open();
  }
}
