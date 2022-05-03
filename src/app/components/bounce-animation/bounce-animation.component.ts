import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-bounce-animation',
  templateUrl: './bounce-animation.component.html',
  styleUrls: ['./bounce-animation.component.scss']
})
export class BounceAnimationComponent implements OnInit {

  public language:string = '';

  constructor(
    private translate: TranslateService
  ) { }

  async ngOnInit(): Promise<void> {
    try {
      setTimeout( () => { 
        this.setLanguage();
        this.translate.onLangChange
          .subscribe(
            lang => this.setLanguage());
       }, 10 );
    } catch(err) {}
  }

  setLanguage() {
    this.language = this.translate.instant('STARTING_PAGE.BOUNCE');
  }

}
