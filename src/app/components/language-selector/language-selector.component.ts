import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-language-selector',
  templateUrl: './language-selector.component.html',
  styleUrls: ['./language-selector.component.scss']
})
export class LanguageSelectorComponent implements OnInit {
  languages: string[] = ['en', 'de', 'es', 'fr'];
  active!: string;

  constructor(
    private _storage: StorageService,
    private _translate: TranslateService
    ) {}

  ngOnInit(): void {
    this.active = this._translate.currentLang;
  }
}
