import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
// import { Configuration } from '../../providers/app.constant';
@Injectable()
export class LoggedInGuard implements CanActivate {

  constructor(private router: Router) {
  }

  canActivate() {
    if(localStorage.getItem('access_token')){
        return true;
    }
      this.router.navigate(['login']);
      alert("Please Login first");
    return false;
  }

}