import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { StartingPageComponent } from './components/starting-page/starting-page.component';
import { TypingAnimationComponent } from './components/typing-animation/typing-animation.component';
import { SettingsComponent } from './components/settings/settings.component';
import { BounceAnimationComponent } from './components/bounce-animation/bounce-animation.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';

export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    StartingPageComponent,
    TypingAnimationComponent,
    SettingsComponent,
    BounceAnimationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
        HttpClientModule,
        TranslateModule.forRoot({
          loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [HttpClient]
          }
        })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
