import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
    selector:'faculty',
    templateUrl:'./faculty.component.html',
    styleUrls:['./faculty.component.scss']
})

export class FacultyComponent{
    name:any;
    constructor(
        private router:Router
    ){  
        this.name=localStorage.getItem('name');
    }
    logout(){
        localStorage.clear();
        this.router.navigate(['/']);
        console.log('I am called')
    }
    
}