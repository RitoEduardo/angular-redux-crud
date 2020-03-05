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

  @Effect()
  loadCustomers$: Observable<Action> = this.action$.pipe(
    ofType(fromCustomerActions.LOAD_CUSTOMERS),
    switchMap( () => this.customerService.getCustomers()
      .pipe(
        map( response => new fromCustomerActions.LoadCustomerSuccess(response) ),
        catchError( error => of( new fromCustomerActions.LoadCustomerFail(error) ) )
      )
    )
  );

}
