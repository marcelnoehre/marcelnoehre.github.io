import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClient, HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreComponent } from './components/core/core.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { ProjectsOverviewComponent } from './components/projects-overview/projects-overview.component';
import { RLOverlayComponent } from './components/rl-overlay/rl-overlay.component'

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
	return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    CoreComponent,
    HomepageComponent,
    ProjectsOverviewComponent,
    RLOverlayComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
		TranslateModule.forRoot({
			loader: {
				provide: TranslateLoader,
				useFactory: HttpLoaderFactory,
				deps: [HttpClient]
			}
		}),
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
