import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-starting-page',
  templateUrl: './starting-page.component.html',
  styleUrls: ['./starting-page.component.scss']
})
export class StartingPageComponent implements OnInit {
  public colorTheme = window.sessionStorage.getItem('colorTheme') || 'dark';

  constructor() { }

  ngOnInit(): void {
  }

}
