import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RenownedMedicineComponent } from './renowned-medicine.component';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { selectIsLoading, selectSpecialists } from '../../root-store/renowned-medicine/selectors';
import { RenownedMedicineModule } from './renowned-medicine.module';
import { ChangeDetectionStrategy } from '@angular/core';
import { of } from 'rxjs';
import { By } from '@angular/platform-browser';
import { Specialist } from '../../models/specialist';
import { SpecialistFinderHeaderComponent } from '../../components/specialist-finder-header/specialist-finder-header.component';
import { FilterFormComponent } from '../../components/filter-form/filter-form.component';

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
    const fx = TestBed.overrideComponent(RenownedMedicineComponent, {
      set: { changeDetection: ChangeDetectionStrategy.Default },
    });
    fixture = fx.createComponent(RenownedMedicineComponent);
    component = fixture.componentInstance;

    store = fx.inject(MockStore);
    store.overrideSelector(selectIsLoading, false);
    store.overrideSelector(selectSpecialists, []);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render loading state', () => {
    component.isLoading$ = of(true);
    fixture.detectChanges();
    const formEl = fixture.debugElement.query(i => i.references.filterFormContainer);
    const listEl = fixture.debugElement.query(i => i.references.specialistListContainer);

    expect(formEl).toBeFalsy();
    expect(listEl).toBeFalsy();
  });

  it('should render default state when not loading', () => {
    const mockSpecialist: Specialist = { name: 'Dr. Pepper', specialty: 'Serving bubbly Rx drinks' };
    component.isLoading$ = of(false);
    component.specialists$ = of([mockSpecialist, mockSpecialist]);
    component.filteredSpecialists$ = of([mockSpecialist]);

    fixture.detectChanges();
    const formEl = fixture.debugElement.query(i => i.references.filterFormContainer);
    const listEl = fixture.debugElement.query(i => i.references.specialistListContainer);

    expect(formEl).toBeTruthy();
    expect(listEl).toBeTruthy();
  });

  it('should load data on refresh event', () => {
    const spy = spyOn(component, 'reload');
    const comp: SpecialistFinderHeaderComponent = fixture.debugElement
      .query(By.directive(SpecialistFinderHeaderComponent))
      .componentInstance;

    comp.refresh.emit();
    fixture.detectChanges();

    expect(spy).toHaveBeenCalled();
  });

  it('should trigger callback on valueChanges event', () => {
    const spy = spyOn(component, 'onValueChanges');
    const mockValue = { allFields: 'newVal' };
    const comp: FilterFormComponent = fixture.debugElement
      .query(By.directive(FilterFormComponent))
      .componentInstance;

    comp.valueChanges.emit(mockValue);
    fixture.detectChanges();

    expect(spy).toHaveBeenCalledWith(mockValue);
  });
});
