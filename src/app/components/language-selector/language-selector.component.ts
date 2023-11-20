import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BreakpointService } from 'src/app/services/breakpoint.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-language-selector',
  templateUrl: './language-selector.component.html',
  styleUrls: ['./language-selector.component.scss']
})
export class LanguageSelectorComponent implements OnInit {
  @ViewChild('activeLang') activeLang!: ElementRef;

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    if (!this.activeLang.nativeElement.contains(event.target as HTMLElement)) {
        this.open = false;
    }
  }

  responsiveClass!: string;
  languages: string[] = ['en', 'de', 'es', 'fr'];
  active!: string;
  open: boolean = false;

  constructor(
    private _breakpoint: BreakpointService,
    private _storage: StorageService,
    private _translate: TranslateService
    ) {}

  ngOnInit(): void {
    this._breakpoint.responsiveClass$.subscribe((responsiveClass) => {
      this.responsiveClass = responsiveClass;
    });
    this.active = this._translate.currentLang;
  }

  async showLanguages(): Promise<void> {
    this.open = true;
    await new Promise<void>(done => setTimeout(() => done(), 10000));
    this.open = false;
  }

  chooseLanguage(lang: string): void {
    this._storage.setLocalEntry('lang', lang);
    this._translate.use(lang);
    this.active = lang;
  }
}
