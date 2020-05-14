import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from '../../root-store/state';
import { LoadDataRequest } from '../../root-store/renowned-medicine/actions';
import { BehaviorSubject, Observable } from 'rxjs';
import {
  selectFilteredSpecialists,
  selectIsLoading,
  selectSpecialists,
} from '../../root-store/renowned-medicine/selectors';
import { Specialist } from '../../models/specialist';
import { switchMap } from 'rxjs/operators';
import { FilterFormValues } from '../../models/filter-form-values';

@Component({
  selector: 'app-renowned-medicine',
  templateUrl: './renowned-medicine.component.html',
  styleUrls: ['./renowned-medicine.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RenownedMedicineComponent implements OnInit {
  isLoading$: Observable<boolean> = new BehaviorSubject(false);
  specialists$: Observable<Array<Specialist>> = new BehaviorSubject([]);
  filteredSpecialists$: Observable<Array<Specialist>>;
  filterValueChange$ = new BehaviorSubject<FilterFormValues>({});

  constructor(private store$: Store<State>) {
  }

  ngOnInit(): void {
    this.isLoading$ = this.store$.select(selectIsLoading);
    this.specialists$ = this.store$.select(selectSpecialists);
    this.filteredSpecialists$ = this.filterValueChange$.pipe(
      switchMap((v: FilterFormValues) => this.store$.select(
        selectFilteredSpecialists,
        v.allFields
      )),
    );

    this.loadData();
  }

  loadData() {
    this.store$.dispatch(LoadDataRequest());
  }

  onValueChanges(formValues: FilterFormValues) {
    this.filterValueChange$.next(formValues);
  }
}
