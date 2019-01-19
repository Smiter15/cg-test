import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleGetComponent } from './vehicle-get.component';

describe('VehicleGetComponent', () => {
  let component: VehicleGetComponent;
  let fixture: ComponentFixture<VehicleGetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VehicleGetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicleGetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
