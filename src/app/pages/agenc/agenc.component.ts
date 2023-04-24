import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { NzDrawerRef, NzDrawerService } from 'ng-zorro-antd/drawer';
import { DrawerContentComponent } from './drawer-content/drawer-content.component';

@Component({
  selector: 'app-agenc',
  templateUrl: './agenc.component.html',
  styleUrls: ['./agenc.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AgencComponent implements OnInit {
  
  drawerRef!: NzDrawerRef;

  openWithService() {
    this.drawerRef = this.nzDrawerService.create({
      nzTitle: 'Drawer Title',
      nzContent: DrawerContentComponent,
      nzWidth: 600,
      nzContentParams: {
        name: 'This is a param from DrawerComponent'
      }
    });

    this.drawerRef.afterOpen.subscribe(() => {
      console.log('Drawer(Component) open');
    });

    this.drawerRef.afterClose.subscribe(data => {
      console.log(data);
    });
  }

  constructor(
    private nzDrawerService: NzDrawerService
  ) {
  }

  ngOnInit() {
  }
}
