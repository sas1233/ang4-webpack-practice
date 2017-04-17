import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { routes } from './detail.routes';
import { DetailComponent } from './detail.component';

import * as _ from 'lodash';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import {
  SimpleService
} from './simple.service';

console.log('`Detail` bundle loaded asynchronously', );

@NgModule({
  declarations: [
    // Components / Directives/ Pipes
    DetailComponent,
  ],
  imports: [
    Ng2SmartTableModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
  ],
  providers: [SimpleService]
})
export class DetailModule {
  public static routes = routes;

}
