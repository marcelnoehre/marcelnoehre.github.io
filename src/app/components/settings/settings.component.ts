import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  public settingsOpen: boolean = false;

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    if(event.target.innerWidth > 1300) {
      document.getElementById('side-nav')!.style.display = 'flex';
      document.getElementById('color-theme-selector')!.style.display = 'flex';
    } else {
      if(this.settingsOpen) {
        document.getElementById('side-nav')!.style.display = 'flex';
        document.getElementById('color-theme-selector')!.style.display = 'flex';
      } else {
        document.getElementById('side-nav')!.style.display = 'none';
        document.getElementById('color-theme-selector')!.style.display = 'none';
      }
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

  public openSettings(): void {
    this.settingsOpen = this.settingsOpen? false : true;
    if(this.settingsOpen) {
      document.getElementById('side-nav')!.style.display = 'flex';
      document.getElementById('color-theme-selector')!.style.display = 'flex';
    } else {
      document.getElementById('side-nav')!.style.display = 'none';
      document.getElementById('color-theme-selector')!.style.display = 'none';
    }
  }
}
