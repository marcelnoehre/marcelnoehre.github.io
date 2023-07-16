import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-core',
  templateUrl: './core.component.html',
  styleUrls: ['./core.component.scss']
})
export class CoreComponent implements OnInit {
  languageSelector!: boolean;
  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.languageSelector = window.scrollY >= window.innerHeight;
  }

  constructor() { }

  ngOnInit(): void {
    this.languageSelector = window.scrollY >= window.innerHeight;
  }

}
