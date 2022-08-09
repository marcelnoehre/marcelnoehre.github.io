import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StartingPageComponent } from './components/core/starting-page/starting-page.component';
import { CoreComponent } from './components/core/core/core.component';

@NgModule({
  declarations: [
    AppComponent,
    StartingPageComponent,
    CoreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
