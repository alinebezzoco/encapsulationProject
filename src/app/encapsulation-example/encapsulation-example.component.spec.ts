import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EncapsulationExampleComponent } from './encapsulation-example.component';

describe('EncapsulationExampleComponent', () => {
  let component: EncapsulationExampleComponent;
  let fixture: ComponentFixture<EncapsulationExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EncapsulationExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EncapsulationExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
