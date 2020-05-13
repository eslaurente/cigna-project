import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from '../../root-store/state';
import { LoadDataRequest } from '../../root-store/renowned-medicine/actions';
import { Observable } from 'rxjs';
import { selectIsLoading, selectSpecialists } from '../../root-store/renowned-medicine/selectors';
import { Specialist } from '../../models/specialist';

@Component({
  selector: 'app-renowned-medicine',
  templateUrl: './renowned-medicine.component.html',
  styleUrls: ['./renowned-medicine.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RenownedMedicineComponent implements OnInit {
  isLoading$: Observable<boolean>;
  specialists$: Observable<Array<Specialist>>;

  constructor(private store$: Store<State>) { }

  ngOnInit(): void {
    this.isLoading$ = this.store$.select(selectIsLoading);
    this.specialists$ = this.store$.select(selectSpecialists);

    this.store$.dispatch(LoadDataRequest());
  }

}
