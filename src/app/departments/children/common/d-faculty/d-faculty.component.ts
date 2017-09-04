import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-d-faculty',
  templateUrl: './d-faculty.component.html',
  styleUrls: ['./d-faculty.component.scss']
})
export class DFacultyComponent implements OnInit {

  faculties = [
    {
      name: "Dr. Brijesh Kochhar",
      qual: "Ph.D, PGDBA, CIPM, M.Tech, B.Tech.",
      exp: "16 Years",
      spec: "DataBase, Data Warehouse, Networking",
      pubs: "32"
    },
    {
      name: "Mr. C M Sharma",
      qual: "Pursuing PhD, M. Phill., M. Tech, B.E., PGCCL",
      exp: "20 Years",
      spec: "Computer Network, Artificial Intelligence",
      pubs: "8"
    },
    {
      name: "Dr. Bhawna Suri",
      qual: "Ph.D, M.Tech, M.Sc, B.Sc(H)",
      exp: "11.5 Years",
      spec: "Data Streams, Data Warehouse,Big Data",
      pubs: "6"
    },
    {
      name: "Dr. Achal Kaushik",
      qual: "Ph.D. , M. Tech",
      exp: "13 Years",
      spec: "Grid, Cloud Computing, IoT",
      pubs: "7"
    },

  ];

  constructor() { }

  ngOnInit() {
  }

}
