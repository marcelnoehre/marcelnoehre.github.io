import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Navigation } from '../../components/navigation/navigation';
import { Screen } from '../../services/screen';
import { AboutMe } from "../../components/about-me/about-me";
import { Cube } from '../../components/cube/cube';
import { SelectedPublications } from '../../components/selected-publications/selected-publications';
import { Grid } from "../../components/grid/grid";
import { Contact } from '../../components/contact/contact';
import { Scrollbar } from '../../components/scrollbar/scrollbar';
import { CommonModule } from '@angular/common';
import lottie from 'lottie-web';

@Component({
  selector: 'app-home',
  imports: [CommonModule, Navigation, Cube, Scrollbar, AboutMe, AboutMe, SelectedPublications, Grid, Contact],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home implements OnInit {
  @ViewChild('scrollDown', { static: true }) animationContainer!: ElementRef;
  protected width: number = 0;
  protected height: number = 0;
  protected scrollY: number = 0;
  protected firstName: Array<string> = ['M', 'a', 'r', 'c', 'e', 'l'];
  protected lastName: Array<string> = ['N', 'ö', 'h', 'r', 'e'];

  constructor(private _screen: Screen) { }

  ngOnInit() {
    this._screen.width$.subscribe(w => this.width = w);
    this._screen.height$.subscribe(h => this.height = h);
    this._screen.scrollY$.subscribe(y => this.scrollY = y);
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
}
