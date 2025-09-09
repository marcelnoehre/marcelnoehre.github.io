import { Component, OnInit } from '@angular/core';
import { Screen } from '../../services/screen';
import { Router } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-navigation',
  imports: [MatIconModule, MatButtonModule],
  templateUrl: './navigation.html',
  styleUrl: './navigation.scss'
})
export class Navigation implements OnInit {
  protected home: boolean = false;
  protected width: number = 0;

  constructor(
    private _router: Router,
    private _screen: Screen
  ) { }

  ngOnInit() {
    this._screen.width$.subscribe(w => this.width = w);
  }

  protected redirect(route: string): void {
    this._router.navigate([route]);
  }

}
