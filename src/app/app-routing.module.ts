import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from "./contact/contact.component";
import { AboutComponent } from "./about/about.component";
import { FacingsComponent } from "./facings/facings.component";
import { GebitsslijtageComponent } from "./gebitsslijtage/gebitsslijtage.component";
import { KroonEnBrugwerkComponent } from "./kroon-en-brugwerk/kroon-en-brugwerk.component";

const routes: Routes = [
  { path: 'puur', component: ContactComponent },
  { path: '', component: AboutComponent },
  { path: 'gebitsslijtage', component: GebitsslijtageComponent },
  { path: 'kroon-en-brugwerk', component: KroonEnBrugwerkComponent },
  { path: 'facings', component: FacingsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
