import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { StorageService } from './services/storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  public title = 'portfolio'; 
  public colorTheme = 'dark';

  constructor(
    private translate: TranslateService, 
    private storage: StorageService
    ) {
    translate.setDefaultLang('de');
    let lang = null;
    try {
      lang = storage.getSessionEntry('lang');
    } catch(err) {}  
    lang = lang? lang : 'de';
    storage.setSessionEntry('lang', lang);
    translate.use(lang);
  }

  ngOnInit() {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      this.colorTheme = 'dark'
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
      this.colorTheme = 'light'
    }
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
      this.colorTheme = event.matches ? 'dark' : 'light';
      this.storage.setSessionEntry('colorTheme', this.colorTheme);
    });
    this.storage.setSessionEntry('colorTheme', this.colorTheme);
  }
}
