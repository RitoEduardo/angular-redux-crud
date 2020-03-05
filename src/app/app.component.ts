import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromStore from './store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'crud-app';

  constructor( private store: Store<fromStore.AppState> ) {
    this.store.select('customers').subscribe( rs => {
      console.log( rs );
    });
  }
}
