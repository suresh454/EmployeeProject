import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }
  public getEmployee(){
    return [{"id": 1, "name":"Suresh","age":34},
    {"id": 2, "name":"Suneel","age":36},
    {"id": 3, "name":"Nagaiah","age":64},
    {"id": 4, "name":"Bhagya","age":54},
    {"id": 5, "name":"Aarthi","age":30}];
  }
}
