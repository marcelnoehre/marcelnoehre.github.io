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
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { ColorThemeSelectorComponent } from './components/color-theme-selector/color-theme-selector.component';
import { TimelineComponent } from './components/timeline/timeline.component';
import { ExperiencePageComponent } from './components/experience-page/experience-page.component';
import { ProjectsPageComponent } from './components/projects-page/projects-page.component';
import { ContactPageComponent } from './components/contact-page/contact-page.component';

export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    StartingPageComponent,
    SideNavComponent,
    TypingAnimationComponent,
    SettingsComponent,
    BounceAnimationComponent,
    ColorThemeSelectorComponent,
    TimelineComponent,
    ExperiencePageComponent,
    ProjectsPageComponent,
    ContactPageComponent
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
