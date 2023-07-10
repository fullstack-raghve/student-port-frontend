import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  public editForm: boolean = false;
  student: any;
  submitted = false;

  constructor(private fb: FormBuilder, private commonService: CommonService) {
    this.registerForm = this.fb.group({
      name: ['', Validators.compose([Validators.required])],
      email: ['', Validators.compose([Validators.required,
      Validators.pattern('^[A-Za-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')])],
      password: ['', Validators.compose([Validators.required])],
     // isAdmin: [false, Validators.requiredTrue]
     isAdmin: [false]


      // phone: ['', Validators.compose([Validators.required, Validators.maxLength(10), Validators.pattern('^[0-9]+$')])],
    });
  }

  ngOnInit() {
  }

  get f() { return this.registerForm.controls; }


  registerFormSubmit(val): void {
    console.log('regiter val',val)

    this.submitted = true;
    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }
    const data = this.registerForm.value;
    console.log('regiter data',data)

    this.commonService.createUser(data).subscribe({
      next: (res) => {
        console.log('res',res);
        this.registerForm.reset();
        this.submitted = true;
      },
      error: (e) => console.error(e)
    });
  }

}
