import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { RenownedMedicineEffectEffects } from './effects';

describe('RenownedMedicineEffectEffects', () => {
  let actions$: Observable<any>;
  let effects: RenownedMedicineEffectEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        RenownedMedicineEffectEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(RenownedMedicineEffectEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
