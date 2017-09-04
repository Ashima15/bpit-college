import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Configuration } from '../../../app.constants';
import { CustomHttpService } from "../../../default.header.service";

declare let $: any;
@Component({
  selector: 'studentprojects',
  templateUrl: './studentProj.component.html',
  styleUrls: ['./studentProj.component.scss', './../../faculty.component.scss']
})
export class StudentProjComponent implements OnInit {
  studentprojects:any;
  file:any;
  serveUrl:any; 
  allProjects:any;
  branch:any;
    
  loader:Boolean=true;
  submitProgress: Boolean = false;

  constructor(
    private http:CustomHttpService,
    private con:Configuration
  ) { 
    this.serveUrl=this.con.server;
  }

  ngOnInit() {
    this.branch=localStorage.getItem('branch');
    this.studentprojects=this.initForm();
    this.getStudentProjects();
  }

  initForm(){
    return new FormGroup({
      branch:new FormControl(this.branch,[Validators.required]),
      Project_title: new FormControl('',[Validators.required, Validators.maxLength(250)]),
      description: new FormControl('',[Validators.required, Validators.maxLength(600)]),
      project_pic:new FormControl('',[Validators.required])
    })
  }

  studentprojectsSubmit(){
    let formData = new FormData();
    formData.append('branch',this.studentprojects.value['branch']);
    formData.append('Project_title', this.studentprojects.value['Project_title']);
    formData.append('description', this.studentprojects.value['description']);
    formData.append('project_pic', this.file);
    this.onSubmit(formData);
  }

    getFile(event: any) {
      this.file = event.srcElement.files[0];
  }

  onSubmit(formData:any){
    this.http.post(this.serveUrl +'student-projects/',formData).subscribe(res=>{
      this.submitProgress=false;
      $('#successModal').modal('show');
    },err=>{
      this.submitProgress=false;
    })
  }
    
    getStudentProjects(){
        this.loader=true;
        this.http.get(this.serveUrl +'student-projects').subscribe(res=>{
            this.loader=false;
            this.allProjects=res;
        },err=>{
            this.loader=false;
        })
      }
}
