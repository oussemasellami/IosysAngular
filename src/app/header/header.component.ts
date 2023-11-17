import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent  {

  v1:string="bonjour 4IoSys1!!!"
  prop:boolean=false;
message:string=''
v2:string='4IoSys1'

  show(){

this.message='event binding'
  }
  
}
