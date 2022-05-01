import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { StartingPageComponent } from './components/starting-page/starting-page.component';

@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    StartingPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
