import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrademarkPostFileComponent } from './trademark-post-file.component';

describe('TrademarkPostFileComponent', () => {
  let component: TrademarkPostFileComponent;
  let fixture: ComponentFixture<TrademarkPostFileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrademarkPostFileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrademarkPostFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
