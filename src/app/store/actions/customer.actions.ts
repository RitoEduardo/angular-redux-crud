import { Action } from '@ngrx/store';
import { Customer } from 'src/app/models/customer.model';

/** GET CUSTOMER */
export const LOAD_CUSTOMERS = '[Customer] Load customers';
export const LOAD_CUSTOMERS_SUCCESS = '[Customer] Load customers success';
export const LOAD_CUSTOMERS_FAIL = '[Customer] Load customers fail';

/** ADD CUSTOMER */
export const ADD_CUSTOMER = '[Customer] add customer';
export const ADD_CUSTOMER_SUCCESS = '[Customer] add customer success';
export const ADD_CUSTOMER_FAIL = '[Customer] add customer fail';

/** UPDATE CUSTOMER */
export const UPDATE_CUSTOMER = '[Customer] update customer';
export const UPDATE_CUSTOMER_SUCCESS = '[Customer] update customer success';
export const UPDATE_CUSTOMER_FAIL = '[Customer] update customer fail';

/** DELETE CUSTOMER */
export const DELETE_CUSTOMER = '[Customer] delete customer';
export const DELETE_CUSTOMER_SUCCESS = '[Customer] delete customer success';
export const DELETE_CUSTOMER_FAIL = '[Customer] delete customer fail';



/** GET METHOD CUSTOMER */
export class LoadCustomers implements Action {
  readonly type = LOAD_CUSTOMERS;
}

export class LoadCustomersSuccess implements Action {
  readonly type = LOAD_CUSTOMERS_SUCCESS;
  constructor( public payload: Customer[] ) { }
}

export class LoadCustomersFail implements Action {
  readonly type = LOAD_CUSTOMERS_FAIL;
  constructor( public payload: any) { }
}

/** POST METHOD CUSTOMER */
export class AddCustomer implements Action {
  readonly type = ADD_CUSTOMER;
  constructor( public payload: Customer) {
  }
}

export class AddCustomerSuccess implements Action {
  readonly type = ADD_CUSTOMER_SUCCESS;
  constructor( public payload: any ) { }
}

export class AddCustomerFail implements Action {
  readonly type = ADD_CUSTOMER_FAIL;
  constructor( public payload: any) { }
}

/** PUT METHOD CUSTOMER */
export class UpdateCustomer implements Action {
  readonly type = UPDATE_CUSTOMER;
  constructor( public payload: Customer) { }
}

export class UpdateCustomerSuccess implements Action {
  readonly type = UPDATE_CUSTOMER_SUCCESS;
  constructor( public payload: any ) { }
}

export class UpdateCustomerFail implements Action {
  readonly type = UPDATE_CUSTOMER_FAIL;
  constructor( public payload: any) { }
}

/** DELETE METHOD CUSTOMER */
export class DeleteCustomer implements Action {
  readonly type = DELETE_CUSTOMER;
  constructor( public payload: number ) { }
}

export class DeleteCustomerSuccess implements Action {
  readonly type = DELETE_CUSTOMER_SUCCESS;
  constructor( public payload: any ) { }
}

export class DeleteCustomerFail implements Action {
  readonly type = DELETE_CUSTOMER_FAIL;
  constructor( public payload: any) { }
}

export type CustomerActions =
  LoadCustomers |
  LoadCustomersSuccess |
  LoadCustomersFail |
  AddCustomer |
  AddCustomerSuccess |
  AddCustomerFail |
  UpdateCustomer |
  UpdateCustomerSuccess |
  UpdateCustomerFail |
  DeleteCustomer |
  DeleteCustomerSuccess |
  DeleteCustomerFail
;
