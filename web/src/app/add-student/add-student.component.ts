import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import the student interface from the module.
import { Student } from '../app.module';
import { FormControl } from '@angular/forms';
import { Form } from '@angular/forms';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
})
export class AddStudentComponent {

  //create a object to store our user form data
  user: Object = {};
  http: HttpClient;
  baseUrl: string;
  studentAdded: boolean = false;
  studentAddedError: boolean = false;

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this.http = http;
    this.baseUrl = baseUrl;
  }

  public onSubmitTemplateBased(form, user) {
      this.http.post<Student>(this.baseUrl + 'students/add', user).subscribe(
        result => {
          console.log(result);
          //toggle to true for the UI
          this.studentAdded = true;
          //reset the form
          form.reset();  
        },
        error => { 
          this.studentAddedError = true; 
          form.reset();  
        }
      );
  }
}