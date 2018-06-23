import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CosmeticTattoosComponent } from './cosmetic-tattoos.component';

describe('CosmeticTattoosComponent', () => {
  let component: CosmeticTattoosComponent;
  let fixture: ComponentFixture<CosmeticTattoosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CosmeticTattoosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CosmeticTattoosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
