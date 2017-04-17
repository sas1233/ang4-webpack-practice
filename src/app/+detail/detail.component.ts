import {
  Component,
  OnInit,
} from '@angular/core';
/*
 * We're loading this component asynchronously
 * We are using some magic with es6-promise-loader that will wrap the module with a Promise
 * see https://github.com/gdi2290/es6-promise-loader for more info
 */
import {
  SimpleService
} from './simple.service';

console.log('`Detail` component loaded asynchronously');

@Component({
  selector: 'detail',
  template: `
    <h1>Hello from Detail</h1>
    <ng2-smart-table [settings]="settings"></ng2-smart-table>
    <router-outlet></router-outlet>
  `,
})

export class DetailComponent implements OnInit {

  public settings = {
    columns: {
      id: {
        title: 'ID'
      },
      name: {
        title: 'Full Name'
      },
      username: {
        title: 'User Name'
      },
      email: {
        title: 'Email'
      }
    }
  };

  public books: any;

//  private service: SimpleService;

    constructor(private service: SimpleService) {
      console.log(this.service.getStatic());
    }

  public ngOnInit() {
//    console.log(this.service.getStatic());
    console.log('hello `Detail` component');
  }

}
