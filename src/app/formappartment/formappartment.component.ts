import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-formappartment',
  templateUrl: './formappartment.component.html',
  styleUrls: ['./formappartment.component.css']
})
export class FormappartmentComponent implements OnInit {
appartform!:FormGroup

  id=0
constructor( private acr : ActivatedRoute){

}
ngOnInit(): void {
  this.id=this.acr.snapshot.params['id']
  this.appartform=new FormGroup({
    numAppart:new FormControl('',Validators.required),
    numEtage:new FormControl('',Validators.required),
    surface:new FormControl('',Validators.required),
    terrasse:new FormControl('',Validators.required),
    surfaceTerrasse:new FormControl('',Validators.required),
    category:new FormControl('',Validators.required),
    description:new FormControl('',[Validators.required,Validators.minLength(10)]),
    residence:new FormControl(this.id,Validators.required)

  })
}

get numAppart(){return this.appartform.get('numAppart')}
get numEtage(){return this.appartform.get('numEtage')}
get surface(){return this.appartform.get('surface')}
get terrasse(){return this.appartform.get('terrasse')}
get surfaceTerrasse(){return this.appartform.get('surfaceTerrasse')}
get category(){return this.appartform.get('category')}
get description(){return this.appartform.get('description')}
get residence(){return this.appartform.get('residence')}
add(){
  console.log("my form: "+JSON.stringify(this.appartform.value))
}

}
