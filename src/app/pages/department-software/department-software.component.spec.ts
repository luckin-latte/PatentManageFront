import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentSoftwareComponent } from './department-software.component';

describe('DepartmentSoftwareComponent', () => {
  let component: DepartmentSoftwareComponent;
  let fixture: ComponentFixture<DepartmentSoftwareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepartmentSoftwareComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartmentSoftwareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
