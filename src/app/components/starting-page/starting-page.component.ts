import { Component, OnInit } from '@angular/core';
import { filter, Observable, pluck } from 'rxjs';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-starting-page',
  templateUrl: './starting-page.component.html',
  styleUrls: ['./starting-page.component.scss']
})
export class StartingPageComponent implements OnInit {
  public colorTheme = window.sessionStorage.getItem('colorTheme') || 'dark';
  colorThemeChange$!: Observable<string>;

  constructor(
    private storage: StorageService
  ) { }

  async ngOnInit(): Promise<void> {
    this.colorThemeChange$ = this.storage.storageChange$.pipe(
      filter(({ key }) => key === "colorTheme"),
      pluck("id")
    );
    this.colorThemeChange$.subscribe(newTheme => {
      this.colorTheme = newTheme;
    });
  }

}
