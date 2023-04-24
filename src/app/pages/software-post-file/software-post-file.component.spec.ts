import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoftwarePostFileComponent } from './software-post-file.component';

describe('SoftwarePostFileComponent', () => {
  let component: SoftwarePostFileComponent;
  let fixture: ComponentFixture<SoftwarePostFileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SoftwarePostFileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SoftwarePostFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
