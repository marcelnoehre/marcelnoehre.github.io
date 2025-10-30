import { Component, Input, OnInit } from '@angular/core';
import { Data } from '../../services/data';
import { Screen } from '../../services/screen';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.html',
  styleUrl: './contact.scss'
})
export class Contact implements OnInit {
  protected scrollY: number = 0;
  protected height: number = 0
  @Input() public minScroll: number = 0;
  
  public year: string = new Date().getFullYear().toString();

  constructor(
    private _data: Data,
    private _screen: Screen
  ) { }

  ngOnInit() {
    this._screen.scrollY$.subscribe(scrollY => this.scrollY = scrollY);
    this._screen.height$.subscribe(height => this.height = height);
  }

  redirect(url: string, target: string): void {
    window.open(url, target);
  }
}
