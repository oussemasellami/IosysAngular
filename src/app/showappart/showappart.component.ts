import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-showappart',
  templateUrl: './showappart.component.html',
  styleUrls: ['./showappart.component.css']
})
export class ShowappartComponent implements OnInit {
id=0
constructor(private activateroute:ActivatedRoute){

}

ngOnInit(): void {
  
  this.id=this.activateroute.snapshot.params['id']
}

}
