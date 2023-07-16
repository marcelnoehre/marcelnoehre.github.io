import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { StorageService } from './services/storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'portfolio';

  constructor(
    private _storage: StorageService,
    private _translate: TranslateService
  ) {
    _translate.setDefaultLang('en');
    _translate.use(_storage.getLocalEntry('lang') || 'en');
  }
}
