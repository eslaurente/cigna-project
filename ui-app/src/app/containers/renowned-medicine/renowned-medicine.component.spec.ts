import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RenownedMedicineComponent } from './renowned-medicine.component';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { selectIsLoading, selectSpecialists } from '../../root-store/renowned-medicine/selectors';
import { RenownedMedicineModule } from './renowned-medicine.module';

describe('RenownedMedicineComponent', () => {
  let component: RenownedMedicineComponent;
  let fixture: ComponentFixture<RenownedMedicineComponent>;
  let store: MockStore;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RenownedMedicineModule,
      ],
      providers: [
        provideMockStore(),
      ],
      declarations: [RenownedMedicineComponent],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RenownedMedicineComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(MockStore);
    store.overrideSelector(selectIsLoading, false);
    store.overrideSelector(selectSpecialists, []);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
