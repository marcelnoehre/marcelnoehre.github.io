import { AfterViewInit, Component, Input, ViewChild } from '@angular/core';
import { MenuComponent } from '../menu/menu.component';
import { ScreenDirective } from '../../../directives/screen.directive';
import { Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [MenuComponent, ScreenDirective, MatButtonModule, MatIconModule],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.scss'
})
export class ToolbarComponent implements AfterViewInit{
  @ViewChild(MenuComponent) menu!: MenuComponent;
  @Input() public showLogo: boolean = false;
  @Input() public screenHeight: number = 0;
  @Input() public screenWidth: number = 0;

  constructor(
    private _router: Router
  ) { }

  ngAfterViewInit() {
    try { 
      this.screenHeight = window.innerHeight;
      this.screenWidth = window.innerWidth;
    } catch (err) { }
  }

  redirect(route: string): void {
    this._router.navigate([route]);
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
