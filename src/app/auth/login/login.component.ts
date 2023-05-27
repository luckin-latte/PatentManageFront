import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { LoginService } from './login.service';
import { LoginRequest, UserInfo } from '../../shared/model/login';

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
    ) {

    }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      // userName: [null, [Validators.required]],
      // password: [null, [Validators.required]],
      // captcha: [null, [Validators.required]],

      userName: ["admin", [Validators.required]],
      password: ["123456", [Validators.required]],
      captcha: [1234, [Validators.required]],
      remember: [true]
    });
  }

  public submitForm(): void {
    for (const i in this.loginForm.controls) {
      this.loginForm.controls[i].markAsDirty();
      this.loginForm.controls[i].updateValueAndValidity();
    }
    
    // 处理表单数据
    console.log(this.loginForm.value);
    const { userName, password } = this.loginForm.value;
    const loginRequest: LoginRequest = { userName, password }

    // 请求后端登录
    this.loginService.login(loginRequest).subscribe((res: any) =>{
      console.log('登录成功', res);
      // 存储token
      // localStorage.setItem('token', res.data.token)
      const token = res.data.token;
      const userId = res.data.userId;
      const userInfo: UserInfo = { token, userId };
      sessionStorage.setItem('UserInfo', JSON.stringify(userInfo));
      // 路由跳转
      this.router.navigate(['/indexProposal']);
    })
  }

  public confirmationValidator = (control: FormControl): { [s: string]: boolean } => {
    if (!control.value) {
      return { required: true };
    } else if (control.value !== this.loginForm.controls.password.value) {
      return { confirm: true, error: true };
    }
    return {};
  };

  // 请求验证码
  public getCaptcha(e: MouseEvent): void {
    e.preventDefault();
  }

}
