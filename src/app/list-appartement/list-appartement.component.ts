import { Component, OnInit } from '@angular/core';
import { Appartement } from '../models/appartment';
import { Residence } from '../models/residence';
import { AppartmentService } from '../services/appartment.service';

@Component({
  selector: 'app-list-appartement',
  templateUrl: './list-appartement.component.html',
  styleUrls: ['./list-appartement.component.css']
})
export class ListAppartementComponent implements OnInit {
aff:boolean=false
appartnew!:null
  imageUrl="/assets/images/"
  residencesList: Residence[]=[
    {id: 1, name: "Residence 1", address: "Address 1", image: this.imageUrl+"residence1.jpg"},
    {id: 2, name: "Residence 2", address: "Address 2", image: this.imageUrl+"residence2.jpg"},
    {id: 3, name: "Residence 3", address: "Address 3", image: this.imageUrl+"residence3.jpg"}
  ]

  appartementsList: Appartement[]=
  [
    {id: 1, terrasse: "Terrasse 1", numAppart: 18, numEtage: 0, surface: 500, surfaceTerrasse: 250, category: "category 1", description: "appartement desc 1", status: true ,residence: this.residencesList[0]},
    {id: 2, terrasse: "Terrasse 2", numAppart: 21, numEtage: 5, surface: 250, surfaceTerrasse: 250, category: "category 2", description: "appartement desc 2", status: false ,residence: this.residencesList[0]},
    {id: 3, terrasse: "Terrasse 3", numAppart: 16, numEtage: 8, surface: 300, surfaceTerrasse: 250, category: "category 3", description: "appartement desc 3", status: true ,residence: this.residencesList[0]},
    {id: 4, terrasse: "Terrasse 4", numAppart: 16, numEtage: 8, surface: 600, surfaceTerrasse: 250, category: "category 4", description: "appartement desc 4", status: true ,residence: this.residencesList[1]},
    {id: 5, terrasse: "Terrasse 5", numAppart: 16, numEtage: 8, surface: 100, surfaceTerrasse: 250, category: "category 5", description: "appartement desc 5", status: true ,residence: this.residencesList[1]},
    {id: 6, terrasse: "Terrasse 6", numAppart: 16, numEtage: 8, surface: 420, surfaceTerrasse: 260, category: "category 6", description: "appartement desc 6", status: true ,residence: this.residencesList[2]},

  ]
  listappart:[]=[]
  constructor(private appservice:AppartmentService){

  }
  ngOnInit(): void {
    this.appservice.getappartment().subscribe((data:any)=>{
console.log('my list'+JSON.stringify(data))
this.listappart=data
    })
  }

  display(){
this.aff=!this.aff
  }
  addappart(appart:Appartement){
    this.appservice.addappartment(appart).subscribe(()=>{
      console.log("added")
      //window.location.reload()
    })
   // this.appartementsList.push(appart)
   window.location.reload()
  }
  updatex(app:any){
this.appartnew=app
  }

  updateappartment(appar:any){
    this.appservice.updateappartment(appar.id,appar).subscribe(()=>{
      console.log("updated")
      window.location.reload()
    })
//let i= this.appartementsList.findIndex(a=>a.id==appar.id)
//this.appartementsList[i]=appar

this.appartnew=null
  }

  deleteapp(app:any){
    this.appservice.deletappartment(app.id).subscribe(()=>{
      console.log("deleted")
      window.location.reload()
    })
   //this.appartementsList= this.appartementsList.filter(a=>a!==app)
  }
summ!:number

  sum(){
    this.summ=this.appservice.getsumofvalue(this.appartementsList,"numAppart",21)
  }
}
