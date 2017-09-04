import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Configuration } from '../../../app.constants';
import { CustomHttpService } from "../../../default.header.service";

declare let $:any;
@Component({
  selector: 'timetable',
  templateUrl: './timetable.component.html',
  styleUrls: ['./timetable.component.scss', './../../faculty.component.scss']
})
export class TimetableComponent implements OnInit {
  TimeTable:any;
  file:any;
  serveUrl:any;
  alltimetable: any;
    
  loader:Boolean=true;
  submitProgress: Boolean = false;
  branchName: any;
  branchId:any;

  constructor(
    private http:CustomHttpService,
    private con:Configuration
  ) { 
    this.serveUrl=this.con.server;
  }

  ngOnInit() {
    this.branchId=localStorage.getItem('branch');
    this.TimeTable=this.initForm();
    this.getBranch();
  }

  initForm(){
    return new FormGroup({
      branch:new FormControl('',[Validators.required]),
      time_table:new FormControl('',[Validators.required])
    })
  }

  timetableSubmit(){
    
    let formData = new FormData();
    formData.append('branch',this.branchId)
    formData.append('time_table', this.file);
    this.onSubmit(formData);
  }

    getFile(event: any) {
      this.file = event.srcElement.files[0];
  }

  onSubmit(formData:any){
    this.http.post(this.serveUrl +'time-table/',formData).subscribe(res=>{
      this.submitProgress=false;
      $('#successModal').modal('show');
    },err=>{
      this.submitProgress=false;
    })
  }
    getBranch(){
    this.http.get(this.serveUrl +'branch/'+this.branchId).subscribe(response=>{
      this.branchName=response.text();
      this.getTimetable();
    },err=>{

    })
    }
      getTimetable(){
      console.log(this.branchName,"hgcjcvgcvjgcjghcjghcjghcjhgcjhg");        
    this.http.get(this.serveUrl +'time-table/'+ this.branchName).subscribe(res=>{
      this.alltimetable=res;
    },err=>{

    })
  }
}
