import * as fromCustomActions from '../actions/customer.actions';
import { Customer } from 'src/app/models/customer.model';

export interface CustomerState {
  data: Customer[];
  loaded: boolean;
  loading: boolean;
  error: string;
}

export const initialState: CustomerState = {
  data: [],
  loaded: false,
  loading: false,
  error: ''
};

export function reducer(state = initialState, action ) {
  console.log( action );
  switch (action.type) {
    case fromCustomActions.LOAD_CUSTOMERS: {
      return {
        ...state,
        loading: true
      };
    }
    default:
      return state;
  }
}

