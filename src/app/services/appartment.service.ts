import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Appartement } from '../models/appartment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppartmentService {
  apartmentUrl ='http://localhost:3000/appartement'
  apartmentUrls ='/api/appartement'
  constructor( private http:HttpClient) { }

  getsumofvalue(list:any,creteria:string,value:any){
let s=0
for(let i in list){
  if(list[i][creteria]==value){
    s++
  }
}
return s
  }

getappartment():Observable<Appartement[]>{
  return this.http.get<Appartement[]>(this.apartmentUrl)
}
addappartment(appartment:Appartement):Observable<Appartement[]>{
  return this.http.post<Appartement[]>(this.apartmentUrls,appartment)
}

deletappartment(id:number):Observable<Appartement[]>{
  return this.http.delete<Appartement[]>(this.apartmentUrls+'/'+id)
}

updateappartment(id:number,appartment:Appartement):Observable<Appartement[]>{
  return this.http.put<Appartement[]>(this.apartmentUrls+'/'+id,appartment)
}

}
