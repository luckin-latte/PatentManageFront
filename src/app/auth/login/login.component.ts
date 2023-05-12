import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { LoginService } from './login.service';
import { LoginRequest } from '../../shared/model/login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private loginService: LoginService
    ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      userName: ["admin", [Validators.required]],
      // userName: [null, [Validators.required]],
      password: ["123456", [Validators.required]],
      // password: [null, [Validators.required]],
      captcha: [1234, [Validators.required]],
      // captcha: [null, [Validators.required]],
      remember: [true]
    });
  }

  submitForm(): void {
    const loginForm = this.loginForm;
    const { controls } = loginForm;
    for (const i in controls) {
      controls[i].markAsDirty();
      controls[i].updateValueAndValidity();
    }
    
    // 表单数据
    console.log(loginForm.value);
    const { userName, password } = loginForm.value;
    const loginRequest: LoginRequest = { userName, password }
    // 请求后端登录
    this.loginService.login(loginRequest).subscribe((res: any) =>{
      console.log('登录成功', res);
      // 存储token
      // localStorage.setItem('token', res.data.token)
      sessionStorage.setItem('token', res.data.token);
      this.router.navigate(['/indexProposal']);
    })
  }

  confirmationValidator = (control: FormControl): { [s: string]: boolean } => {
    if (!control.value) {
      return { required: true };
    } else if (control.value !== this.loginForm.controls.password.value) {
      return { confirm: true, error: true };
    }
    return {};
  };

  // 请求验证码
  getCaptcha(e: MouseEvent): void {
    e.preventDefault();
  }

}
