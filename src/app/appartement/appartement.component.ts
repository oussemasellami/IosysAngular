import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Appartement } from '../models/appartment';
import { Residence } from '../models/residence';

@Component({
  selector: 'app-appartement',
  templateUrl: './appartement.component.html',
  styleUrls: ['./appartement.component.css']
})
export class AppartementComponent {

  imageUrl="/assets/images/"
  res:Residence={id:1,name:"",address:"",image:this.imageUrl+"residence1.jpg"}
  @Input() app:Appartement={
    id:1,
    numAppart:0,
    numEtage:0,
    surface:0,
    terrasse:"",
    surfaceTerrasse:0,
    category:"",
    description:"",
    residence:this.res,
   status:true
  }
@Output() delev=new EventEmitter<Appartement>
  supprimer(){
this.delev.emit(this.app)
  }
}
