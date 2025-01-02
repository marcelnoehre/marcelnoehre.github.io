import { trigger, state, style, transition, animate } from '@angular/animations';
import { AfterViewInit, Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [MatDividerModule, MatButtonModule, MatIconModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
  animations: [
    trigger('fadeIn', [
      state('void', style({ opacity: 0 })),
      transition(':enter', animate('1s 0.5s ease-in-out')),
    ])
  ]
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

  close(): void {
    this.show = false;
  }

  redirect(route: string): void {
    this._router.navigate([route]);
    this.show = false;
  }

  scroll(target: string): void {
    let px;
    if (target === 'about') px = this.screenHeight * 1.2;
    if (target === 'contact') px = window.document.body.scrollHeight;
    window.scrollTo({
      top: px,
      behavior: 'smooth'
    });
    this.show = false;
  }

}
