import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';

//new import for add student component. 
import { AddStudentComponent } from './add-student/add-student.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    AddStudentComponent //declare our new class. 
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'add-student', component: AddStudentComponent, pathMatch: 'full' } //add the new route for the add student page. I'm really just following my nose with this bit, but so far so good :-)
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

//not sure if this is a good place to put this, but i want to make the interface reusable. 
export interface Student {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  major: string;
  averageGrade: number; //new param, average grade.
}
