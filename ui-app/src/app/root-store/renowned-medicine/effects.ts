import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { LoadDataRequest, LoadDataSuccess } from './actions';
import { exhaustMap, mergeMap, map, tap } from 'rxjs/operators';
import { RenownedMedicineApiService } from '../../services/renowned-medicine-api.service';

@Injectable()
export class RenownedMedicineEffectEffects {
  loadData$ = createEffect(() => this.actions$.pipe(
      ofType(LoadDataRequest.type),
      exhaustMap(action => this.api.fetchAllData()
        .pipe(
          tap({
            next: value => console.log('Specialists Loaded', value)
          }),
          map(specialists => ({ type: LoadDataSuccess.type, payload: specialists })),
        ),
      )
  ));

  constructor(
    private actions$: Actions,
    private api: RenownedMedicineApiService,
  ) {}
}
