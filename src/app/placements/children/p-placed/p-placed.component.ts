import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Configuration } from '../../../app.constants';

@Component({
  selector: 'app-p-placed',
  templateUrl: './p-placed.component.html',
  styleUrls: ['./p-placed.component.scss']
})
export class PPlacedComponent implements OnInit {

  serveUrl:string="";
  list:any;
  loader:boolean=false;
  constructor(
    private http:HttpClient,
    private con:Configuration,
  ) { 
    this.serveUrl=this.con.server;
  }

  ngOnInit() {
    this.getStudentPlaced()
  }

  getStudentPlaced(){
    this.loader=true;
    this.http.get(this.serveUrl + 'student-placed').subscribe(res=>{
    this.loader=false;      
      this.list=res;
    },err=>{
      this.loader=false;
    })

  }
}
