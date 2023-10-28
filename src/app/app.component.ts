import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { StorageService } from './services/storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  langs: string[] = ['en', 'de', 'es', 'fr'];
  title: string = 'portfolio';

  constructor(
    private _storage: StorageService,
    private _translate: TranslateService
  ) {
    let defaultLang: string = this.langs.includes(_translate.getBrowserLang() || '') ? _translate.getBrowserLang()! : 'en';
    _translate.setDefaultLang(defaultLang)
    _translate.use(_storage.getLocalEntry('lang') || defaultLang);
  }
}
