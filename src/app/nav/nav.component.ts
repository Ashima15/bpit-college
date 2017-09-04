import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  loggedIn:boolean=false;
  name:string="";
  constructor(
    private router:Router
  ) { }

  ngOnInit() {
    if(localStorage.getItem('access_token')){
      this.loggedIn=true;
      this.name=localStorage.getItem('name');
    }
  }

  login(){
    if(localStorage.getItem('access_token')){
      this.router.navigate(['/faculty']);
    }
    else{
      this.router.navigate(['/login']);
    }
  }

}
