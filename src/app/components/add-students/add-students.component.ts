import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonService } from 'src/app/services/common.service';
@Component({
  selector: 'app-add-students',
  templateUrl: './add-students.component.html',
  styleUrls: ['./add-students.component.scss']
})
export class AddStudentsComponent implements OnInit {
  registerForm: FormGroup;
  public editForm:boolean = false;
  student: any;

  constructor(private fb: FormBuilder,private commonService:CommonService) {

  this.student =  JSON.parse(sessionStorage.getItem('student'));
  console.log('student--',this.student);

  if(this.student){
    this.editForm = true;

    this.registerForm = this.fb.group({
      name: [this.student.name, Validators.compose([Validators.required])],
      class: [this.student.class, Validators.compose([Validators.required])],
      email: [this.student.email, Validators.compose([Validators.required,
      Validators.pattern('^[A-Za-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')])],
      phone: [this.student.phone, Validators.compose([Validators.required, Validators.maxLength(10), Validators.pattern('^[0-9]+$')])],
      marks: [this.student.marks, Validators.compose([Validators.required, Validators.maxLength(10), Validators.pattern('^[0-9]+$')])],
    });
  }else{
    this.editForm = false;

    this.registerForm = this.fb.group({
      name: ['', Validators.compose([Validators.required])],
      class: ['', Validators.compose([Validators.required])],
      email: ['', Validators.compose([Validators.required,
      Validators.pattern('^[A-Za-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')])],
      phone: ['', Validators.compose([Validators.required, Validators.maxLength(10), Validators.pattern('^[0-9]+$')])],
      marks: ['', Validators.compose([Validators.required, Validators.maxLength(10), Validators.pattern('^[0-9]+$')])],
    });
  }

  }
  ngOnInit() {

  }


  get f() { return this.registerForm.controls; }


  registerFormSubmit(value: any) {
    if(this.editForm){
      this.commonService.updateStudent(this.student.id,value).subscribe(res=>{
        console.log('update studnt',res)
      })
    }else{
      this.commonService.saveStudent(value).subscribe(res=>{
        console.log('save studnt',res)
      })
    }

  }
}
