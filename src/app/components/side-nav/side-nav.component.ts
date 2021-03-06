import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { filter, Observable, pluck } from 'rxjs';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {
  public colorTheme:string = window.sessionStorage.getItem('colorTheme') || 'dark';
  colorThemeChange$!: Observable<string>;
  public selectedLanguage:string = '';
  public languagesDefault:string[] = ['en', 'de', 'fr', 'es', 'it']
  public languages:string[] = [];

  constructor(
    private storage: StorageService,
    private translate: TranslateService
  ) { }

  ngOnInit(): void {
    this.selectedLanguage = this.storage.getSessionEntry('lang');
    this.getLanguages();
    this.colorThemeChange$ = this.storage.storageChange$.pipe(
      filter(({ key }) => key === "colorTheme"),
      pluck("id")
    );
    this.colorThemeChange$.subscribe(newTheme => {
      this.colorTheme = newTheme;
    });
  }

  newLanguage(lang:string): void {
    this.storage.setSessionEntry('lang', lang);
    this.selectedLanguage = lang;
    this.translate.use(lang);
    this.getLanguages();
  }

  public getLanguages(): void {
    this.languages = [];
    for(let i = 0; i < 5; i++) {
      if(this.selectedLanguage != this.languagesDefault[i]) {
        this.languages.push(this.languagesDefault[i]);
      }
    }
  }
}
