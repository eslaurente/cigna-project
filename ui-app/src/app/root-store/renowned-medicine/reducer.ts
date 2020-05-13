import { initialState, State } from './state';
import { Action, createReducer, on } from '@ngrx/store';
import { LoadDataRequest, LoadDataSuccess } from './actions';

const renownedMedicineReducer = createReducer(
  initialState,
  on(LoadDataRequest, (state) => ({
    ...state,
    isLoading: true
  })),
  on(LoadDataSuccess, (state, action) => ({
    ...state,
    isLoading: false,
    specialists: action.payload
  }))
);

export function reducer(state: State, action: Action) {
  return renownedMedicineReducer(state, action);
}
