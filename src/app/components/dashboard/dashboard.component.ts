import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    sessionStorage.removeItem('student')
  }
  title = 'student-mapper';

  studentRoute() {
    this.router.navigate(['/add-student'])
  }
  viewStudent() {
    //this.router.navigate(['add-student'])
    this.router.navigate(['/view-student'])
  }
  teacherRoute() {
    this.router.navigate(['dashboard/add-teacher'])

  }
}
