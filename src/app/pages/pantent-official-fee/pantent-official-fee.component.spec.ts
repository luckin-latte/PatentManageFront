import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PantentOfficialFeeComponent } from './pantent-official-fee.component';

describe('PantentOfficialFeeComponent', () => {
  let component: PantentOfficialFeeComponent;
  let fixture: ComponentFixture<PantentOfficialFeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PantentOfficialFeeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PantentOfficialFeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
