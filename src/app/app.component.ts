import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromStore from './store';
import { Customer } from './models/customer.model';
import { CustomersService } from './services/customers.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'crud-app';
  customers: Customer[] = [];

  constructor( private store: Store<fromStore.AppState> , private customerService: CustomersService ) {
    // this.store.select('customers').subscribe( rs => {
    //   console.log( rs );
    //   this.customers = rs.data;
    // });

    // this.store.select(fromStore.getState).subscribe( rs => {
    //   console.log('Response state', rs);
    // });

    // this.store.select(fromStore.getCustomersState).subscribe( rs => {
    //   console.log('get data state', rs);
    //   this.customers = rs.data;
    // });

    this.store.select(fromStore.getCustomers).subscribe( data => {
      console.log('get data', data );
      this.customers = data;
    });

  }

  ngOnInit() {
    this.store.dispatch( new fromStore.LoadCustomer() );
    // this.customerService.getCustomers().subscribe( rs => {
    //   console.log( rs );
    //   this.customers = rs;
    // });
  }

  onSelect( id ) {
    this.store.select(fromStore.getCustomersById(id) ).subscribe( infoUser => {
      console.log('get user', infoUser );
    });
  }
}
