import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddStudentsComponent } from './components/add-students/add-students.component';
import { AddTeachersComponent } from './components/add-teachers/add-teachers.component';
import { StudentsLitsComponent } from './components/students-lits/students-lits.component';
import { TeachersListComponent } from './components/teachers-list/teachers-list.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CommonService } from './services/common.service';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    AddStudentsComponent,
    AddTeachersComponent,
    StudentsLitsComponent,
    TeachersListComponent,
    DashboardComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
