import { Component, OnInit } from '@angular/core';
import { IEmployeeModel } from 'src/app/domain/models/employee/employee.model';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // listaBirds: IBirdModel[] = [{
  //   id: 1,
  //   commonName: "pajaro",
  //   scientificName: "string"
  // },
  // {
  //   id: 2,
  //   commonName: "pajaro2",
  //   scientificName: "string2"
  // }
  // ]

}
