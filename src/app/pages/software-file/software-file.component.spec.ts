import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoftwareFileComponent } from './software-file.component';

describe('SoftwareFileComponent', () => {
  let component: SoftwareFileComponent;
  let fixture: ComponentFixture<SoftwareFileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SoftwareFileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SoftwareFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
