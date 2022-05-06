import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  public settingsOpen: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  public openSettings(): void {
    this.settingsOpen = this.settingsOpen? false : true; 

  }
}
