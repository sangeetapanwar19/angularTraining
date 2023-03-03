import { Injectable } from '@angular/core';
import { MainService } from '../main.service';

@Injectable({
  providedIn: 'root'
})

export class LoginService {
  constructor(private _serivce: MainService) {
  }

  setLoginDetails() {
    console.log(this._serivce.setaddress().city);
    return {
      name: 'abc',
      age: '18',
      phone: 3454,
      city: this._serivce.setaddress().city
    };
    
  }
}
