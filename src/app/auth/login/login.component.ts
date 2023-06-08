import { Component, OnInit, ElementRef, Output, ViewChild, EventEmitter } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';

import { LibService } from 'src/app/shared';
import { LoginService } from './login.service';
import { LoginRequest, UserInfo } from '../../shared/model/login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  loginForm: FormGroup;

  @ViewChild('verifyCode', { static: true })
  verifyCode!: ElementRef;
  @Output() private outer = new EventEmitter();
  public captchaCode: string = ''
  public verifyCodeLine: number = 6;//线条数
  public verifyCodeNum: number = 4;//验证码字符长度
  public verifyCodeWidth: any = 120;//验证码宽度
  public verifyCodeHeight: any = 40;//验证码高度
  
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private nzMessageService: NzMessageService,
    private loginService: LoginService,
    private libService: LibService
    ) {
      this.loginForm = this.formBuilder.group({
        // userName: [null, [Validators.required]],
        // password: [null, [Validators.required]],
  
        userName: ["admin", [Validators.required]],
        password: ["123456", [Validators.required]],
        captcha: [null, [Validators.required]],
        remember: [true]
      });
    }

  ngOnInit(): void {
    this.getCaptcha(new MouseEvent('click'));
  }

  public submitForm(): void {
    for (const i in this.loginForm.controls) {
      this.loginForm.controls[i].markAsDirty();
      this.loginForm.controls[i].updateValueAndValidity();
    }
    
    // console.log(this.loginForm.value);
    // 处理表单数据
    const { userName, password, captcha } = this.loginForm.value;
    const loginRequest: LoginRequest = { userName, password }

    if (captcha == this.captchaCode) {
      // 请求后端登录
      this.loginService.login(loginRequest).subscribe((res: any) =>{
        const msg = res.message;
        if (msg === '登录成功') {
          // 存储token
          const { token, userId, userRole } = res.data
          const userInfo: UserInfo = { token, userId, userRole, userName };
          // console.log('userInfo', userInfo);
          sessionStorage.setItem('UserInfo', JSON.stringify(userInfo));
          // 路由跳转
          this.router.navigate(['/indexProposal']);
        } else {
          if (msg) {
            this.nzMessageService.error(msg);
          } else {
            this.nzMessageService.error('登录失败！');
          }
        }
      })
    } else {
      // this.libService.callMessage('error', '验证码错误')
      this.nzMessageService.error('验证码错误！');
      this.getCaptcha(new MouseEvent('click'));
    }

  }

  // 请求验证码
  public getCaptcha(e: MouseEvent): void {
    e.preventDefault();

    const verifyCodePic = this.verifyCode.nativeElement.getContext('2d');
    this.verifyCode.nativeElement.setAttribute('width', this.verifyCodeWidth);
    this.verifyCode.nativeElement.setAttribute('height', this.verifyCodeHeight);
    verifyCodePic.fillStyle = this.randomCol(180, 255);
    verifyCodePic.fillRect(0, 0, this.verifyCodeWidth, this.verifyCodeHeight);
    this.captchaCode = this.randomStr();
    this.randomLine();
    this.randomDot();

    // console.log('this.captchaCode', this.captchaCode)
    // console.log('this.verifyCode', this.verifyCode)
  }

  //生成随机整数
  randomNum(min: any, max: any) {
    return parseInt(Math.random() * (max - min + 1) + min);
  }
  //生成随机颜色
  randomCol(min: any, max: any) {
    const r = this.randomNum(min, max);
    const g = this.randomNum(min, max);
    const b = this.randomNum(min, max);
    return 'rgb(' + r + ',' + g + ',' + b + ')';
  }
  //生成验证码（纯字符串）
  randomStr(): string {
    let codeStr: string = '';
    const codeArr: any[] = [];
		const randomArray=[0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R', 'S','T','U','V','W','X','Y','Z'];
    const verifyCodePic = this.verifyCode.nativeElement.getContext('2d');
    for (let i = 0; i < this.verifyCodeNum; i++) {
      const verifyChar = randomArray[this.randomNum(0, randomArray.length - 1)];
      const fontSize = this.randomNum(25, 35);
      const angle = this.randomNum(-30, 30);
      verifyCodePic.font = fontSize + 'px consolas';
      verifyCodePic.textBaseline = 'top';
      verifyCodePic.save();
      verifyCodePic.fillStyle = this.randomCol(50, 150);
      verifyCodePic.translate(30 * i + 15, 15);
      verifyCodePic.rotate((angle * Math.PI) / 180);
      verifyCodePic.fillText(verifyChar, -10, -5);
      verifyCodePic.restore();
      codeArr.push(verifyChar);
    }
    //将验证码抛出给父组件
    codeStr = codeArr.join('');
    this.outer.emit(codeStr);
    // console.log('codeStr', codeStr)
    return codeStr;
  }
  
  //随机线条
  randomLine() {
    const verifyCodePic = this.verifyCode.nativeElement.getContext('2d');
    for (let i = 0; i < this.verifyCodeLine; i++) {
      verifyCodePic.beginPath();
      verifyCodePic.moveTo(
        this.randomNum(0, this.verifyCodeWidth),
        this.randomNum(0, this.verifyCodeHeight)
      );
      verifyCodePic.lineTo(
        this.randomNum(0, this.verifyCodeWidth),
        this.randomNum(0, this.verifyCodeHeight)
      );
      verifyCodePic.strokeStyle = this.randomCol(50, 230);
      verifyCodePic.closePath();
      verifyCodePic.stroke();
    }
  }
  //随机噪点
  randomDot() {
    const verifyCodePic = this.verifyCode.nativeElement.getContext('2d');
    const verifyCodeDot = 100;
    for (let i = 0; i < verifyCodeDot; i++) {
      verifyCodePic.beginPath();
      verifyCodePic.arc(
        this.randomNum(0, this.verifyCodeWidth),
        this.randomNum(0, this.verifyCodeHeight),
        1,
        0,
        2 * Math.PI
      );
      verifyCodePic.closePath();
      verifyCodePic.fillStyle = this.randomCol(50, 200);
      verifyCodePic.fill();
    }
  }

}
