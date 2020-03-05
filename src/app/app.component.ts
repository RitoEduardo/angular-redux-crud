import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromStore from './store';
import { Customer } from './models/customer.model';
import { CustomersService } from './services/customers.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  customers: Customer[] = [];
  display = 'none';
  people: Customer = {};
  isEditModeEnabled = false;

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
    this.store.dispatch( new fromStore.LoadCustomers() );
    // this.customerService.getCustomers().subscribe( rs => {
    //   console.log( rs );
    //   this.customers = rs;
    // });
  }

  // onSelect( id ) {
  //   this.store.select(fromStore.getCustomersById(id) ).subscribe( infoUser => {
  //     console.log('get user', infoUser );
  //   });
  // }

  openModalDialog() {
    this.display = 'block';
  }

  closeModal() {
    this.people = {};
    this.display = 'none';
    this.isEditModeEnabled = false;
  }

  editCustomer(customer) {
    this.display = 'block';
    this.isEditModeEnabled = true;
    this.people = { ...customer };
  }

  addCustomer() {
    const newCustomer = {
      ...this.people,
      id : new Date().getTime()
    };
    if ( newCustomer.email !== undefined && newCustomer.name !== null ) {
      this.store.dispatch( new fromStore.AddCustomer( newCustomer) );
    } else {
      console.log('Error', newCustomer );
    }
    this.closeModal();

  }

  updateCustomer() {
    console.log('?update', this.people );
    this.store.dispatch( new fromStore.UpdateCustomer( this.people ) );
    this.closeModal();
  }

  removeCustomer( customerId: number ) {
    console.log('?delete', customerId );
    if ( confirm('Are you sure to delete customer?') ) {
      this.store.dispatch( new fromStore.DeleteCustomer( customerId ) );
    }
  }

}
