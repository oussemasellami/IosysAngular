import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ResidenceComponent } from './residence/residence.component';
import { RouterModule, Routes } from '@angular/router';
import { CardResidenceComponent } from './card-residence/card-residence.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { ShowappartComponent } from './showappart/showappart.component';
import { FormappartmentComponent } from './formappartment/formappartment.component';
import { ErrorsComponent } from './shared/errors/errors.component';
import { ListAppartementComponent } from './list-appartement/list-appartement.component';
import { AppartementComponent } from './appartement/appartement.component';
import { AddAppartementComponent } from './add-appartement/add-appartement.component';
import { UpdateAppartmentComponent } from './update-appartment/update-appartment.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ResidenceComponent,
    CardResidenceComponent,
    PageNotFoundComponent,
    ShowappartComponent,
    FormappartmentComponent,
    ErrorsComponent,
    ListAppartementComponent,
    AppartementComponent,
    AddAppartementComponent,
    UpdateAppartmentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
