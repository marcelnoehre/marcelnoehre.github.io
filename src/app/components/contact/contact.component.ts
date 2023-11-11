import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BreakpointService } from 'src/app/services/breakpoint.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  public responsiveClass!: string;
  private email: string = 'info@marcel-noehre.de';
  title: string = '';

  constructor(
    private _translate: TranslateService,
    private _breakpoint: BreakpointService
  ) {

  }

  ngOnInit(): void {
    this._breakpoint.responsiveClass$.subscribe((responsiveClass) => {
      this.responsiveClass = responsiveClass;
    });
    this.title = this._translate.instant('CAPTIONS.CONTACT');
    this._translate.onLangChange.subscribe(() => {
      this.title = this._translate.instant('CAPTIONS.CONTACT');
    });
  }

  sendEmail(): void {
      window.location.href = 'mailto:' + this.email;
  }
}
