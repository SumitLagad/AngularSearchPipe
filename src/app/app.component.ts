import { Component, OnInit } from '@angular/core';
import { DataService } from './services/dataService';
import { FormGroup, FormControl } from '@angular/forms';


class Employee {
  id: number;
  firstName: string;
  lastName: string;
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  firstName = '';
  lastName = '';

  empData: Employee[] = [];
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getEmployeeData().subscribe(
      (data: any) => {
        this.empData = data.employees.employee;
      }
    );
  }
}
