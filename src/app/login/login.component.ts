  import { Component, OnInit } from '@angular/core';
  import { Configuration } from '../app.constants';
  import { HttpClient } from '@angular/common/http';
  import { Location } from '@angular/common';
  import { AuthToken } from '../app.module';
  import { CanActivate, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username:string;
  password:string;
  token:any;
  body:any;
  error:boolean=false;
  serveUrl:string="";
  loader:boolean=false;
  loggedIn:boolean=false;
  constructor(private http: HttpClient, private loc:Location, private con:Configuration,private router:Router) { 
    this.serveUrl=this.con.server;
  }

  ngOnInit() {
  }

  login(){    
    this.loader=true;
    this.body = {
      username: this.username,
      password: this.password
    };
    this.http.post(this.serveUrl + 'auth-token/', this.body).subscribe(data => {
      this.loader=false;
      this.verifySuccess(data);
      // this.body = {
      //   username: null,
      //   password: null
      // };
      // document.getElementById("submitbtn").style.background = "#888";
      // this.token = data;
      // this.loc.back();
    },err=>{
      this.verifyFail();
    });
  }

  verifySuccess(data:any){
    console.log(data,"data");
    localStorage.setItem('access_token',data.token);
    localStorage.setItem('id',data.user_id);
    localStorage.setItem('name',data.firstname);  
    localStorage.setItem('branch',data.branch);
    this.loggedIn=true;  
    this.router.navigate(['/faculty']);
  }

  verifyFail(){
    this.loader=false;
    console.log("i m called");
    document.getElementById("submitbtn").style.background = "#888";
    document.getElementById("submitbtn").style.color = "white";            
    this.error=true;
    this.router.navigate(['/login']);    
  }

}
