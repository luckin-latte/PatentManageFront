import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyTrademarkAddComponent } from './my-trademark-add.component';

describe('MyTrademarkAddComponent', () => {
  let component: MyTrademarkAddComponent;
  let fixture: ComponentFixture<MyTrademarkAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyTrademarkAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyTrademarkAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
