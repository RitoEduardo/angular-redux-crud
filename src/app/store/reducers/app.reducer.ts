import * as fromCustomActions from '../actions/customer.actions';
import { Customer } from 'src/app/models/customer.model';
import { State } from '@ngrx/store';

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
  // console.log( action );
  switch (action.type) {
    case fromCustomActions.LOAD_CUSTOMERS: {
      return {
        ...state,
        loading: true
      };
    }

    case fromCustomActions.LOAD_CUSTOMERS_SUCCESS : {
      const data = action.payload;
      return {
        ...data,
        loaded: true,
        loading: false,
        data
      };
    }

    case fromCustomActions.LOAD_CUSTOMERS_FAIL : {
      return {
        ...state,
        loaded: false,
        loading: false,
        error: action.payload
      };
    }

    case fromCustomActions.ADD_CUSTOMER_SUCCESS : {
      return {
        ...state,
        data: [...state.data, action.payload ],
        loaded: true,
        loading: true
      };
    }

    case fromCustomActions.ADD_CUSTOMER_FAIL : {
      return {
        ...state,
        loaded: false,
        loading: false,
        error: action.payload
      };
    }

    case fromCustomActions.UPDATE_CUSTOMER_SUCCESS : {
      const data = state.data.map( customer => {
        if (customer.id === action.payload.id) {
          return action.payload;
        }
        return customer;
      });

      return {
        ...state,
        data,
        loaded: true,
        loading: false
      };
    }

    case fromCustomActions.UPDATE_CUSTOMER_FAIL : {
      return {
        ...state,
        loaded: false,
        loading: false,
        error: action.payload
      };
    }

    case fromCustomActions.DELETE_CUSTOMER_SUCCESS : {
      const userID = action.payload;
      return {
        ...state,
        data: state.data.filter( user => user.id !== userID ),
        loaded: true,
        loading: true
      };
    }

    case fromCustomActions.DELETE_CUSTOMER_FAIL : {
      return {
        ...state,
        loaded: false,
        loading: false,
        error: action.payload
      };
    }

    default:
      return state;
  }
}

export const getCustomers = ( state: CustomerState ) => state.data;
export const getCustomersLoaded = ( state: CustomerState ) => state.loaded;
export const getCustomersLoading = ( state: CustomerState ) => state.loading;
export const getCustomersError = ( state: CustomerState ) => state.error;

