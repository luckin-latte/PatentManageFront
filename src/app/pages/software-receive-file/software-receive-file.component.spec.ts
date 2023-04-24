import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoftwareReceiveFileComponent } from './software-receive-file.component';

describe('SoftwareReceiveFileComponent', () => {
  let component: SoftwareReceiveFileComponent;
  let fixture: ComponentFixture<SoftwareReceiveFileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SoftwareReceiveFileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SoftwareReceiveFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
