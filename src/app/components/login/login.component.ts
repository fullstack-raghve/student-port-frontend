import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/services/common.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  public editForm: boolean = false;
  student: any;
  constructor(private fb: FormBuilder, private commonService: CommonService,private router:Router) {
    this.loginForm = this.fb.group({
      email: ['', Validators.compose([Validators.required,
      Validators.pattern('^[A-Za-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')])],
      password: ['', Validators.compose([Validators.required])],
      // phone: ['', Validators.compose([Validators.required, Validators.maxLength(10), Validators.pattern('^[0-9]+$')])],
    });
  }

  ngOnInit() {
  }

  get f() { return this.loginForm.controls; }

  loginFormSubmit(value: any) {
    if (this.loginForm.invalid) {
      return;
    }
    const data = this.loginForm.value;
    console.log('loginForm data',data)

    this.commonService.login(data).subscribe({
      next: (res) => {
        console.log('res',res);
        localStorage.setItem('token',JSON.stringify(res))
        this.loginForm.reset();
        this.router.navigate(['/dashboard'])
      },
      error: (e) => console.error(e)
    });
  }
}
