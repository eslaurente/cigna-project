import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RenownedMedicineComponent } from './renowned-medicine.component';

describe('RenownedMedicineComponent', () => {
  let component: RenownedMedicineComponent;
  let fixture: ComponentFixture<RenownedMedicineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RenownedMedicineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RenownedMedicineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
