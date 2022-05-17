import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-color-theme-selector',
  templateUrl: './color-theme-selector.component.html',
  styleUrls: ['./color-theme-selector.component.scss']
})
export class ColorThemeSelectorComponent implements OnInit {

  public colorTheme:string = window.sessionStorage.getItem('colorTheme') || 'dark';

  constructor(
    private storage: StorageService
  ) { }

  ngOnInit(): void {
  }

  changeColorTheme() {
    this.colorTheme = this.colorTheme == 'dark'? 'light' : 'dark';
    this.storage.setSessionEntry('colorTheme', this.colorTheme);
  }

}
