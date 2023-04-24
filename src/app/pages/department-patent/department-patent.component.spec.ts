import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentPatentComponent } from './department-patent.component';

describe('DepartmentPatentComponent', () => {
  let component: DepartmentPatentComponent;
  let fixture: ComponentFixture<DepartmentPatentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepartmentPatentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartmentPatentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
