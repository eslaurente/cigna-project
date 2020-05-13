import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RenownedMedicineComponent } from './renowned-medicine.component';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { Test } from 'tslint';
import { selectIsLoading, selectSpecialists } from '../../root-store/renowned-medicine/selectors';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { ComponentsModule } from '../../components/components.module';

describe('RenownedMedicineComponent', () => {
  let component: RenownedMedicineComponent;
  let fixture: ComponentFixture<RenownedMedicineComponent>;
  let store: MockStore;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatCardModule,
        MatProgressBarModule,
        ComponentsModule,
      ],
      providers: [
        provideMockStore(),
      ],
      declarations: [RenownedMedicineComponent]
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
