import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AppRoutingModule } from './app-routing.module';
import { AboutComponent } from './about/about.component';
import { HeaderComponent } from './header/header.component';
import { FacingsComponent } from './facings/facings.component';
import { KroonEnBrugwerkComponent } from './kroon-en-brugwerk/kroon-en-brugwerk.component';
import { GebitsslijtageComponent } from './gebitsslijtage/gebitsslijtage.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    HomepageComponent,
    AboutComponent,
    HeaderComponent,
    FacingsComponent,
    KroonEnBrugwerkComponent,
    GebitsslijtageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
