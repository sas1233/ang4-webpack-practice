import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class SimpleService {
  constructor(/*private http: Http*/) {
  }

 public getStatic() {
    return ['a', 'b', 'c'];
  }

  // Methods using the http object
};
