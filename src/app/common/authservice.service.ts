import { Injectable } from '@angular/core';
import {HttpResponse} from '@angular/common/http';
import { of } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class AuthserviceService {
  
  constructor() {}
 
  login(username: any, password: any) {
    let signupUsers: any;
    const localData = localStorage.getItem('signupUsers');
    if(localData != null){
      signupUsers = JSON.parse(localData);
    }
    const isUserExist = signupUsers.find((m: { username: any; password: any; }) => m.username == username && m.password == password)
   /* if(isUserExist != undefined){
     alert("User Login Successfully");
     // this.btnSubmit(this.loginObj);
    }
    else{
      alert("Wrong Credentials")
    }*/
    if(isUserExist != undefined){
      localStorage.setItem('token', '1234567890');
      return of(new HttpResponse({ status: 200 }));
    } else {
      alert("Wrong Credentials")
      return of(new HttpResponse({ status: 401 }));
    }
  }

  logout(): void {
    localStorage.removeItem('token');
  }

  isUserLoggedIn(): boolean {
    if (localStorage.getItem('token') != null) {
      return true;
    }
    return false;
  }
}
