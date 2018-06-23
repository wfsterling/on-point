import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomTattoosComponent } from './custom-tattoos.component';

describe('CustomTattoosComponent', () => {
  let component: CustomTattoosComponent;
  let fixture: ComponentFixture<CustomTattoosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomTattoosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomTattoosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
