import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable, of } from 'rxjs';

import { RenownedMedicineEffectEffects } from './effects';
import { LoadDataRequest, LoadDataSuccess } from './actions';
import { cold, hot } from 'jasmine-marbles';
import { RenownedMedicineApiService } from '../../services/renowned-medicine-api.service';

describe('RenownedMedicineEffectEffects', () => {
  let actions$: Observable<any>;
  let effects: RenownedMedicineEffectEffects;
  const mockService = { fetchAllData: () => of([]) };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideMockActions(() => actions$),
        RenownedMedicineEffectEffects,
        {
          provide: RenownedMedicineApiService,
          useValue: mockService,
        },
      ],
    });

    effects = TestBed.inject(RenownedMedicineEffectEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });

  it('should successfully load specialist data', () => {
    const action = LoadDataRequest();
    const completion = LoadDataSuccess({ payload: [] });

    actions$ = hot('-a|', { a: action });
    const expected = cold('-b|', { b: completion });

    expect(effects.loadData$).toBeObservable(expected);
  });
});
