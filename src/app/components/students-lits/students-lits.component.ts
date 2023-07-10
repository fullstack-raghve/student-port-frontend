import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-students-lits',
  templateUrl: './students-lits.component.html',
  styleUrls: ['./students-lits.component.scss']
})
export class StudentsLitsComponent implements OnInit {


  constructor(private commonService: CommonService,private router:Router) {}
  public studentList;

  ngOnInit(): void {
    this.commonService.getStudent().subscribe(res => {
      this.studentList = res;
    })

  }
  view() {

  }
  edit(data) {
    console.log('edit-',data);
    sessionStorage.setItem('student',JSON.stringify(data))
     this.router.navigate(['/add-student'])
  }
  delete(data) {
    console.log('delete-',data)
    this.commonService.deleteStudent(data.id).subscribe(res => {
      console.log('delete response',res)
     // this.studentList = res;
    })
  }

}
