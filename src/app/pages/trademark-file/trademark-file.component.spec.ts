import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrademarkFileComponent } from './trademark-file.component';

describe('TrademarkFileComponent', () => {
  let component: TrademarkFileComponent;
  let fixture: ComponentFixture<TrademarkFileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrademarkFileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrademarkFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
