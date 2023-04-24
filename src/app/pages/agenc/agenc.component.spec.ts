import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgencComponent } from './agenc.component';

describe('AgencComponent', () => {
  let component: AgencComponent;
  let fixture: ComponentFixture<AgencComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgencComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgencComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
