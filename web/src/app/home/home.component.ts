import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import the student interface from the module.
import { Student } from '../app.module';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  public students: Student[];

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    http.get<Student[]>(baseUrl + 'students').subscribe(result => {
      this.students = result;
    }, error => console.error(error));
  }
}