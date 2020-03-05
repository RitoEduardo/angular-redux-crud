import { Action } from '@ngrx/store';

export const LOAD_CUSTOMERS = '[Customer] Load customers';

export class LoadCustomer implements Action {
  readonly type = LOAD_CUSTOMERS;
}

export type CustomerActions = LoadCustomer;
