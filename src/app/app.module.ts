import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MaryntheSectionComponent } from './marynthe-section/marynthe-section.component';
import { MainComponent } from './main/main.component';
import { WieIkBenComponent } from './wie-ik-ben/wie-ik-ben.component';
import { WatIkDoeComponent } from './wat-ik-doe/wat-ik-doe.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MaryntheSectionComponent,
    MainComponent,
    WieIkBenComponent,
    WatIkDoeComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
