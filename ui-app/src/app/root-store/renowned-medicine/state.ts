import { Specialist } from '../../models/specialist';

export const featureName = 'renowned-medicine';

export interface State {
  specialists: Array<Specialist>;
  isLoading?: boolean;
  error?: any;
}

export const initialState: State = {
  specialists: [],
  isLoading: false,
};
