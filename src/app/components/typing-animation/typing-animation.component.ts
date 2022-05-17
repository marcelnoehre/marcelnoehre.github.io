import { Component, OnInit } from '@angular/core';
import { filter, Observable, pluck } from 'rxjs';
import { TypingAnimation } from 'src/app/interfaces/typing-animation';
import { StorageService } from 'src/app/services/storage.service';
import { TypingAnimationService } from 'src/app/services/typing-animation.service';

@Component({
  selector: 'app-typing-animation',
  templateUrl: './typing-animation.component.html',
  styleUrls: ['./typing-animation.component.scss']
})
export class TypingAnimationComponent implements OnInit {
  public colorTheme:string = window.sessionStorage.getItem('colorTheme') || 'dark';
  colorThemeChange$!: Observable<string>;
  public charackters: TypingAnimation = {
    amount: 0
  }

  constructor(
    private storage: StorageService,
    private typing: TypingAnimationService
  ) { }

  ngOnInit(): void {
    let id = null;
    try {
      id = this.storage.getSessionEntry('lang');
    } catch(err) {}  
    id = id? id : 'de';
    this.charackters = this.typing.getCharackters(id);
    this.colorThemeChange$ = this.storage.storageChange$.pipe(
      filter(({ key }) => key === "colorTheme"),
      pluck("id")
    );
    this.colorThemeChange$.subscribe(newTheme => {
      this.colorTheme = newTheme;
    });
  }

}
