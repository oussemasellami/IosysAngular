import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Residence } from '../models/residence';
import { Appartement } from '../models/appartment';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-appartement',
  templateUrl: './add-appartement.component.html',
  styleUrls: ['./add-appartement.component.css']
})
export class AddAppartementComponent implements OnInit {
  imageUrl="/assets/images/"
  res:Residence={id:1,name:"",address:"",image:this.imageUrl+"residence1.jpg"}
app:Appartement={
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
appartform!:FormGroup
@Output() appform=new EventEmitter<Appartement>
ngOnInit(): void {

  this.appartform=new FormGroup({
    numAppart:new FormControl(this.app.numAppart,Validators.required),
    description:new FormControl(this.app.description,Validators.required),
    residence:new FormControl(this.res.id,Validators.required)
  })
  
}

get numAppart(){return this.appartform.get('numAppart')}
get description(){return this.appartform.get('description')}
get residence(){return this.appartform.get('residence')}
add(){

  this.app.numAppart=this.appartform.value.numAppart
  this.app.description=this.appartform.value.description
this.appform.emit(this.app)
}

}
