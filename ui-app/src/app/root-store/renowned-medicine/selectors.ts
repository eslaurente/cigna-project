import { featureName, State } from './state';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export const getIsLoading = (state: State) => state.isLoading;

export const getSpecialists = (state: State) => state.specialists;

export const selectFeatureState = createFeatureSelector<State>(featureName);

export const selectIsLoading = createSelector(selectFeatureState, getIsLoading);

export const selectSpecialists = createSelector(selectFeatureState, getSpecialists);
