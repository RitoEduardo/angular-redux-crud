import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Customer } from '../models/customer.model';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  private apiURL = 'http://localhost:3000/users';
  public httpOpt = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Accept: 'application/json, text/plain'
    })
  };

  constructor(
    private http: HttpClient
  ) { }

  getCustomers() {
    return this.http.get<Customer[]>(this.apiURL);
  }

  updateCustomer( customer: Customer ) {
    return this.http.put(`${this.apiURL}/${customer.id}`, JSON.stringify(customer), this.httpOpt );
  }

  addCustomer( customer: Customer ) {
    return this.http.post(this.apiURL, JSON.stringify(customer), this.httpOpt );
  }

  deleteCustomer( customerId: number ) {
    return this.http.delete(`${this.apiURL}/${customerId}`, this.httpOpt );
  }

}
