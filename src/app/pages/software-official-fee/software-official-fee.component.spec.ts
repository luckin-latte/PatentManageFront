import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoftwareOfficialFeeComponent } from './software-official-fee.component';

describe('SoftwareOfficialFeeComponent', () => {
  let component: SoftwareOfficialFeeComponent;
  let fixture: ComponentFixture<SoftwareOfficialFeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SoftwareOfficialFeeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SoftwareOfficialFeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
