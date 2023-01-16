import { Component } from '@angular/core';
import {MainService} from '../main.service';
import { LoginService } from './login.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
toggle:boolean = true;
constructor(_serive: MainService,private loginservice:LoginService){
  //let course = new MainService();
  console.log('course' , _serive.getCourses());
  console.log(this.loginservice.setLoginDetails());
}
  callToggle(){
    this.toggle = this.toggle?false:true;
  }
}
