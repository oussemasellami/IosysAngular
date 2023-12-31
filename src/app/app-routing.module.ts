import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ResidenceComponent } from './residence/residence.component';
import { CardResidenceComponent } from './card-residence/card-residence.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ShowappartComponent } from './showappart/showappart.component';
import { FormappartmentComponent } from './formappartment/formappartment.component';
import { ListAppartementComponent } from './list-appartement/list-appartement.component';

const ROUTES:Routes=[
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',component:ResidenceComponent,},
  {path:'card',component:CardResidenceComponent},
  {path:'appartment/list',component:ListAppartementComponent},
  {path:'card/showappart/:id',component:ShowappartComponent},
  {path:'card/showappart/:id/addappart/:id',component:FormappartmentComponent},
  {path:'**',component:PageNotFoundComponent} 
]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(ROUTES),
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
