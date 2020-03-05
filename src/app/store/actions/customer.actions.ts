import { Action } from '@ngrx/store';
import { Customer } from 'src/app/models/customer.model';

export const LOAD_CUSTOMERS = '[Customer] Load customers';
export const LOAD_CUSTOMER_SUCCESS = '[Customer] Load customers success';
export const LOAD_CUSTOMER_FAIL = '[Customer] Load customers fail';

export class LoadCustomer implements Action {
  readonly type = LOAD_CUSTOMERS;
}

export class LoadCustomerSuccess implements Action {
  readonly type = LOAD_CUSTOMER_SUCCESS;
  constructor( public payload: Customer[] ) { }
}

export class LoadCustomerFail implements Action {
  readonly type = LOAD_CUSTOMER_FAIL;
  constructor( public payload: any) { }
}

export type CustomerActions = LoadCustomer | LoadCustomerSuccess | LoadCustomerFail;
