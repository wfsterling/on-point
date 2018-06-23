import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChineseMedicineComponent } from './chinese-medicine.component';

describe('ChineseMedicineComponent', () => {
  let component: ChineseMedicineComponent;
  let fixture: ComponentFixture<ChineseMedicineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChineseMedicineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChineseMedicineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
