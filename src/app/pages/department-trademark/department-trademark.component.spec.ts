import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentTrademarkComponent } from './department-trademark.component';

describe('DepartmentTrademarkComponent', () => {
  let component: DepartmentTrademarkComponent;
  let fixture: ComponentFixture<DepartmentTrademarkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepartmentTrademarkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartmentTrademarkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
