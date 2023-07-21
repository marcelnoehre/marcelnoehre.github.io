import { Component, HostListener, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BreakpointService } from 'src/app/services/breakpoint.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  responsiveClass!: string;
  scrollInfo: string = '';

  constructor(
    private _breakpoint: BreakpointService,
    private _translate: TranslateService
  ) {

  }

  ngOnInit(): void {
    this._breakpoint.responsiveClass$.subscribe((responsiveClass) => {
      this.responsiveClass = responsiveClass;
    });
    this._translate.onLangChange.subscribe(() => {
      this.scrollInfo = this._translate.instant('HOMEPAGE.SCROLL');
    });
  }

  get currentLang(): string {
    return this._translate.currentLang;
  }
}
