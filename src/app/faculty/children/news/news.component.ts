import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Configuration } from '../../../app.constants';
import { CustomHttpService } from "../../../default.header.service";

declare let $: any;
@Component({
  selector: 'news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss', './../../faculty.component.scss']
})
export class NewsComponent implements OnInit {
  news:any;
  file:any;
  serveUrl:any;   
  allNews: any;
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
    this.news=this.initForm();
    this.getNews();
  }

  initForm(){
    return new FormGroup({
      branch:new FormControl(this.branch,[Validators.required]),
      title: new FormControl('',[Validators.required, Validators.maxLength(250)]),
      date: new FormControl('',[Validators.required]),
      news:new FormControl('', [Validators.required])
    })
  }


onDueDate(e: any) {
    if (new Date(e.target.value) < new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate())) {
      alert("Please choose an upcoming date from the calendar.");
      this.news.controls['date'].patchValue(this.getTomorrow());
    }
  }

  getTomorrow(){
    var currentDate = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);
    var day = ("0" + (currentDate.getDate() + 1)).slice(-2)
    var month = ("0" + (currentDate.getMonth() + 1)).slice(-2)
    var year = currentDate.getFullYear()
    let tomorrow = year + '-' + month + '-' + day;
    return tomorrow;
  }

  newsSubmit(){
    let formData = new FormData();
    formData.append('branch',this.news.value['branch']);
    formData.append('title', this.news.value['title']);
    formData.append('date', this.news.value['date']);
    formData.append('news', this.file);
    this.onSubmit(formData);
  }

    getFile(event: any) {
      this.file = event.srcElement.files[0];
  }

  onSubmit(formData:any){
    this.http.post(this.serveUrl +'news/',formData).subscribe(res=>{
      this.submitProgress=false;
      $('#successModal').modal('show');
    },err=>{
      this.submitProgress=false; 
    })
  }
    getNews(){
        this.loader=true
        this.http.get(this.serveUrl +'news').subscribe(res=>{
            this.loader=false;
            this.allNews=res;
        },err=>{
            this.loader=false;
        })
  }
}