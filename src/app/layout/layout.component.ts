import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  isCollapsed = true;
  public userRole: string = '';
  public userName: string = '';

  constructor(
    private router: Router
  ) { 
    const userInfoString = sessionStorage.getItem('UserInfo');
    if (userInfoString) {
      const userInfo = JSON.parse(userInfoString);
      this.userRole = userInfo.userRole;
      this.userName = userInfo.userName;
    }
  }

  ngOnInit(): void {
  }

  public logout(e: MouseEvent) {
    // 清除本地sessionStorage
    sessionStorage.removeItem('UserInfo');
    // 路由跳转
    this.router.navigate(['/login']);
  }

}
