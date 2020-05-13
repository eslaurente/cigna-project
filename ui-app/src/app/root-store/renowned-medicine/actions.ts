import { createAction, props } from '@ngrx/store';
import { Specialist } from '../../models/specialist';

export const LoadDataRequest = createAction(
  '[RENOWNED MEDICINE] Load Data Request'
);

export const LoadDataSuccess = createAction(
  '[RENOWNED MEDICINE] Load Data Success',
  props<{ payload: Array<Specialist> }>()
);
