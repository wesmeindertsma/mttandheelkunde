import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CardsComponent } from './home/wat-ik-doe/cards/cards.component';
import { WieIkBenComponent } from './home/wie-ik-ben/wie-ik-ben.component';
import { WatIkDoeComponent } from './home/wat-ik-doe/wat-ik-doe.component';
import { FacingsComponent } from './werkzaamheden/facings/facings.component';
import { BlekenComponent } from './werkzaamheden/bleken/bleken.component';
import { SlijtageBehandelingComponent } from './werkzaamheden/slijtage-behandeling/slijtage-behandeling.component';
import { KroonBrugwerkComponent } from './werkzaamheden/kroon-brugwerk/kroon-brugwerk.component';
import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ContactComponent } from './components/contact/contact.component';
import {InMemoryWebApiModule} from "angular-in-memory-web-api";
import {InMemoryDataService} from "./in-memory-data.service";
import {HttpClientModule} from "@angular/common/http";
import {TruncatePipe} from "./werkzaamheden/truncate.pipe";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CardsComponent,
    WieIkBenComponent,
    WatIkDoeComponent,
    FacingsComponent,
    BlekenComponent,
    SlijtageBehandelingComponent,
    KroonBrugwerkComponent,
    HeaderComponent,
    NavbarComponent,
    ContactComponent,
    TruncatePipe,
    TruncatePipe,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
