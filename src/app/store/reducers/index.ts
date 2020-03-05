import * as fromCustomerReducer from './app.reducer';

export interface AppState {
  customers: fromCustomerReducer.CustomerState;
}

export const reducers = {
  customers : fromCustomerReducer.reducer
};
