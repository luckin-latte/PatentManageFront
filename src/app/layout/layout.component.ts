import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  isCollapsed = true;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  public logout(e: MouseEvent) {
    // 清除本地sessionStorage
    sessionStorage.removeItem('UserInfo');
    // 路由跳转
    this.router.navigate(['/login']);
  }

}
