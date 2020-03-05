import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators'; // ofType

// import all requried services or any dependencies
import * as fromCustomerActions from '../actions/customer.actions';
import { CustomersService } from 'src/app/services/customers.service';


@Injectable()
export class CustomerEffects {

  constructor(
    private action$: Actions,
    private customerService: CustomersService
  ) { }

  // Get Data
  @Effect()
  loadCustomers$: Observable<Action> = this.action$.pipe(
    ofType(fromCustomerActions.LOAD_CUSTOMERS),
    switchMap( () => this.customerService.getCustomers()
      .pipe(
        map( response => new fromCustomerActions.LoadCustomersSuccess(response) ),
        catchError( error => of( new fromCustomerActions.LoadCustomersFail(error) ) )
      )
    )
  );

  // Add Data
  @Effect()
  addCustomer$: Observable<Action> = this.action$.pipe(
    ofType(fromCustomerActions.ADD_CUSTOMER),
    map( ( action: fromCustomerActions.AddCustomer ) => action.payload ),
    switchMap( (payload) => this.customerService.addCustomer( payload )
      .pipe(
        map( response => new fromCustomerActions.AddCustomerSuccess(response) ),
        catchError( error => of(new fromCustomerActions.AddCustomerFail(error) ) )
      )
    )
  );

  // Put Data
  @Effect()
  updateCustomer$: Observable<Action> = this.action$.pipe(
    ofType(fromCustomerActions.UPDATE_CUSTOMER),
    map( ( action: fromCustomerActions.UpdateCustomer ) => action.payload ),
    switchMap( (payload) => this.customerService.updateCustomer( payload )
      .pipe(
        // map( response => new fromCustomerActions.UpdateCustomerSuccess(response) ),
        map( updatedCustomer => new fromCustomerActions.UpdateCustomerSuccess({
          id: updatedCustomer['id'],
          changes: updatedCustomer
        }) ),
        catchError( error => of(new fromCustomerActions.UpdateCustomerFail(error) ) )
      )
    )
  );

  // Delete Data
  @Effect()
  deleteCustomer$: Observable<Action> = this.action$.pipe(
    ofType(fromCustomerActions.DELETE_CUSTOMER),
    map( ( action: fromCustomerActions.DeleteCustomer ) => action.payload ),
    switchMap( (payload) => this.customerService.deleteCustomer( payload )
      .pipe(
        map( () => new fromCustomerActions.DeleteCustomerSuccess(payload) ),
        catchError( error => of(new fromCustomerActions.DeleteCustomerFail(error) ) )
      )
    )
  );

}
