import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EncapsulationNoneComponent } from './encapsulation-none.component';

describe('EncapsulationNoneComponent', () => {
  let component: EncapsulationNoneComponent;
  let fixture: ComponentFixture<EncapsulationNoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EncapsulationNoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EncapsulationNoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
