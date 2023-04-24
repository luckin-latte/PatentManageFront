import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexApartmentComponent } from './index-apartment.component';

describe('IndexApartmentComponent', () => {
  let component: IndexApartmentComponent;
  let fixture: ComponentFixture<IndexApartmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexApartmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexApartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
