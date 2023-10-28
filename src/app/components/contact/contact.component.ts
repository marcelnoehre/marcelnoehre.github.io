import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  private email: string = 'info@marcel-noehre.de';
  title: string = '';

  constructor(
    private _translate: TranslateService
  ) {

  }

  ngOnInit(): void {
    this.title = this._translate.instant('CAPTIONS.CONTACT');
    this._translate.onLangChange.subscribe(() => {
      this.title = this._translate.instant('CAPTIONS.CONTACT');
    });
  }

  sendEmail(): void {
      window.location.href = 'mailto:' + this.email;
  }
}
