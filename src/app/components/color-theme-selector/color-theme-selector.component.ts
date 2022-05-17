import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-color-theme-selector',
  templateUrl: './color-theme-selector.component.html',
  styleUrls: ['./color-theme-selector.component.scss']
})
export class ColorThemeSelectorComponent implements OnInit {

  public colorTheme:string = window.sessionStorage.getItem('colorTheme') || 'dark';

  constructor() { }

  ngOnInit(): void {
  }

  changeColorTheme() {
    this.colorTheme = this.colorTheme == 'dark'? 'light' : 'dark';
  }

}
