import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MySoftwareAddComponent } from './my-software-add.component';

describe('MySoftwareAddComponent', () => {
  let component: MySoftwareAddComponent;
  let fixture: ComponentFixture<MySoftwareAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MySoftwareAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MySoftwareAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
