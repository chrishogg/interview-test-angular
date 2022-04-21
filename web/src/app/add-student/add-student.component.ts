import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl } from '@angular/forms';
//import the student interface from the module.
import { Student } from '../app.module';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
})
export class AddStudentComponent {

  //create a object to store our user form data
  user: Object = {};
  http: HttpClient;
  baseUrl: string;

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this.http = http;
    this.baseUrl = baseUrl;
  }

  public onSubmitTemplateBased(user) {
      console.log(user);
      this.http.post<Student>(this.baseUrl + 'students/add', user).subscribe(result => console.error(result), error => console.error(error));
  }
}