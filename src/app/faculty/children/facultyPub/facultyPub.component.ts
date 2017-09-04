import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Configuration } from '../../../app.constants';
import { CustomHttpService } from "../../../default.header.service";
@Component({
  selector: 'facultyPub',
  templateUrl: './facultyPub.component.html',
  styleUrls: ['./facultyPub.component.scss', '../../faculty.component.scss']
})
export class FacultyPubComponent{

  // publication:any;
  // file:any;
  // serveUrl:any;
  // allPublication:any;
  // branch:any;
  //  description:any; 
  // constructor(
  //   private http:CustomHttpService,
  //   private con:Configuration
  // ) { 
  //   this.serveUrl=this.con.server;
  // }

  // ngOnInit() {
  //   this.branch=localStorage.getItem('branch');
  //   // this.publication=JSON.stringify(this.initForm());
  //   this.publication=this.initForm();  
  //   this.publication=JSON.stringify(this.publication);  
  //   // this.getPublications();
  // }

  // initForm(){
  //   console.log(this.branch);
  //   return new FormGroup({
  //     branch:new FormControl(this.branch),
  //     faculty_publication: new FormControl('',[Validators.required, Validators.maxLength(2000)]),
  //   })
  // }


  // onSubmit(formData:any){
  //   console.log(this.description);
  //   this.http.post(this.serveUrl +'faculty-publications/',this.publication).subscribe(res=>{
  //   },err=>{
  //   })
  // }

  // // getPublications(){
  // //   this.http.get(this.serveUrl +'faculty-publications').subscribe(res=>{
  // //     this.allPublication=res;
  // //   },err=>{

  // //   })
  // // }

}
