import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-p-team',
  templateUrl: './p-team.component.html',
  styleUrls: ['./p-team.component.scss']
})
export class PTeamComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  members=[
    {
      "name":"Dr Babita G. Kataria",
      "des":"Director employement and education planning",
      "phone":"9310080009",
      "email":"katariababita@yahoo.co.in"
    },
    {
      "name":"Dr Gopal Krishnan",
      "des":"Head- Corporate Relations",
      "phone":"9899506201",
      "email":"gopalbpit@gmail.com"
    },
    {
      "name":"Ms Promila Rana",
      "des":"Office Assistant",
    }
  ]

}
