import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Configuration } from '../../../app.constants';
import { CustomHttpService } from "../../../default.header.service";

declare let $: any;
@Component({
  selector: 'material',
  templateUrl: './material.component.html',
  styleUrls: ['./material.component.scss', './../../faculty.component.scss']
})
export class MaterialComponent implements OnInit {
  material:any;
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
    this.material=this.initForm();
    this.getFiles();
  }

  initForm(){
    return new FormGroup({
      branch:new FormControl(this.branch,[Validators.required]),
      MCQ:new FormControl('',[Validators.required]),
      presentation:new FormControl('',[Validators.required]),
      QuestionPaper:new FormControl('',[Validators.required]),
      Assignment:new FormControl('',[Validators.required])
    })
  }

  materialSubmit(){
    let formData = new FormData();
    formData.append('branch',this.material.value['branch']);
    formData.append('MCQ', this.file);
    formData.append('Assignment', this.file);
    formData.append('QuestionPaper', this.file);
    formData.append('presentation', this.file);
    this.onSubmit(formData);
  }

    getFile(event: any) {
      this.file = event.srcElement.files[0];
  }

  onSubmit(formData:any){
    this.http.post(this.serveUrl +'study-material/',formData).subscribe(res=>{
      this.submitProgress=false;
      $('#successModal').modal('show');
    },err=>{
      this.submitProgress=false;
    })
  }
    getFiles(){
        this.loader=true;
        this.http.get(this.serveUrl +'study-material').subscribe(res=>{
          this.loader=false;
          this.allFiles=res;
        },err=>{
            this.loader=false;
        })
      }
}
