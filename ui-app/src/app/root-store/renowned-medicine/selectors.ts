import { featureName, State } from './state';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Specialist } from '../../models/specialist';

export const getIsLoading = (state: State) => state.isLoading;

export const getSpecialists = (state: State) => state.specialists;

export const selectFeatureState = createFeatureSelector<State>(featureName);

export const selectIsLoading = createSelector(selectFeatureState, getIsLoading);

export const selectSpecialists = createSelector(selectFeatureState, getSpecialists);

export const selectFilteredSpecialists = createSelector(
  selectSpecialists,
  (specialists: Array<Specialist>, matchPhrase: string) => specialists.filter(s => {
    if (!matchPhrase) {
      return true;
    }
    return hasSubstring(s.name, matchPhrase) || hasSubstring(s.specialty, matchPhrase);
  }),
);

const hasSubstring = (a: string, b: string) => a.toLowerCase().includes(b.toLowerCase());
