import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Configuration } from '../../../app.constants';
import { CustomHttpService } from "../../../default.header.service";

declare let $: any;
@Component({
  selector: 'lessonplan',
  templateUrl: './lesson-plan.component.html',
  styleUrls: ['./lesson-plan.component.scss', './../../faculty.component.scss']
})
export class LessonPlanComponent implements OnInit {
  lessonplan:any;
  file:any;
  serveUrl:any;
  allFiles:any;
  branch:any;
    
  submitProgress:boolean=false;;
  loader:boolean=true;
    
  constructor(
    private http:CustomHttpService,
    private con:Configuration
  ) { 
    this.serveUrl=this.con.server;
  }

  ngOnInit() {
    this.branch=localStorage.getItem('branch');
    this.lessonplan=this.initForm();
    this.getFiles();
  }

  initForm(){
    return new FormGroup({
      branch:new FormControl(this.branch,[Validators.required]),
      LecurePlan:new FormControl('',[Validators.required])
    })
  }

  lessonplanSubmit(){
    let formData = new FormData();
    formData.append('branch',this.lessonplan.value['branch']);
    formData.append('LecurePlan', this.file);
    this.onSubmit(formData);
  }

    getFile(event: any) {
      this.file = event.srcElement.files[0];
  }

  onSubmit(formData:any){
    this.http.post(this.serveUrl +'lesson-plan/',formData).subscribe(res=>{
      this.submitProgress=false;
      $('#successModal').modal('show');
    },err=>{
      this.submitProgress=false;
    })
  }
    getFiles(){
        this.loader=true;
        this.http.get(this.serveUrl +'lesson-plan').subscribe(res=>{
            this.loader=false;
            this.allFiles=res;
        },err=>{
            this.loader=false;
        })
      }
}
