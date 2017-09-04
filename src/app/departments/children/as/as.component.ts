import { Component, OnInit } from '@angular/core';
import { DepartmentsService } from '../../departments.service'
@Component({
  selector: 'as',
  templateUrl: './as.component.html',
  styleUrls: ['./as.component.scss']
})
export class AsComponent implements OnInit {

  constructor(
    private department:DepartmentsService
  ) { }

  ngOnInit() {
    this.department.heading = "Applied Science";
  }

}