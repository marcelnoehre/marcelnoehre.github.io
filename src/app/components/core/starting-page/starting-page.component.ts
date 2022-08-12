import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-starting-page',
  templateUrl: './starting-page.component.html',
  styleUrls: ['./starting-page.component.scss']
})
export class StartingPageComponent implements OnInit {
  scrolled: boolean = false;

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
      this.scrolled = true;
  }
  

  constructor() { }

  ngOnInit(): void {
  }
}
