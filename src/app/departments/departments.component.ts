import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart, NavigationEnd,} from '@angular/router';
@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.scss']
})
export class DepartmentsComponent implements OnInit {

  public heading:any;
  constructor(
    private router:Router
  ) { 
    router.events.subscribe((val) => {
        // see also 
        console.log(val instanceof NavigationEnd); 
    });
  }

  ngOnInit() {
  }

}
