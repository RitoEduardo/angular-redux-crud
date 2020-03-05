import * as fromCustomerReducer from './app.reducer';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Customer } from 'src/app/models/customer.model';

export interface AppState {
  customers: fromCustomerReducer.CustomerState;
}

export const reducers = {
  customers : fromCustomerReducer.reducer
};

export const getState = ( state ) => state;

export const getCustomersState = createFeatureSelector<fromCustomerReducer.CustomerState>('customers');
export const getCustomers = createSelector(getCustomersState, fromCustomerReducer.getCustomers );

export const getCustomersById = ( id ) => createSelector( getCustomers, ( customers: Customer[] ) => {
  return customers.find( user => user.id === id );
});
