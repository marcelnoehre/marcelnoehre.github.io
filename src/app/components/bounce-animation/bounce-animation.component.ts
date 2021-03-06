import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { filter, Observable, pluck } from 'rxjs';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-bounce-animation',
  templateUrl: './bounce-animation.component.html',
  styleUrls: ['./bounce-animation.component.scss']
})
export class BounceAnimationComponent implements OnInit {

  public bounce: string[] = [];
  public lang:string = '';
  public colorTheme:string = window.sessionStorage.getItem('colorTheme') || 'dark';
  colorThemeChange$!: Observable<string>;

  constructor(
    private translate: TranslateService,
    private storage: StorageService
  ) { }

  async ngOnInit(): Promise<void> {
    this.colorThemeChange$ = this.storage.storageChange$.pipe(
      filter(({ key }) => key === "colorTheme"),
      pluck("id")
    );
    this.colorThemeChange$.subscribe(newTheme => {
      this.colorTheme = newTheme;
    });
    try {
      setTimeout( () => { 
        this.setBounce();
        this.translate.onLangChange
          .subscribe(
            lang => this.setBounce());
       }, 10 );
    } catch(err) {}
  }

  setBounce() {
    this.lang = this.storage.getSessionEntry('lang');
    this.bounce = this.translate.instant('STARTING_PAGE.BOUNCE').split('');
  } 
}
