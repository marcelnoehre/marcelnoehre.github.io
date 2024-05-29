import { AfterViewInit, Component, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent implements AfterViewInit {
  @Input() public screenHeight: number = 0;
  public show: boolean = false;

  constructor(
    private _router: Router
  ) { }

  ngAfterViewInit() {
    try { 
      this.screenHeight = window.innerHeight;
    } catch (err) { }
  }

  open(): void {
    this.show = true;
  }

  redirect(): void {
    this._router.navigate(['/impressum']);
    this.show = false;
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
    this.show = false;
  }

}
