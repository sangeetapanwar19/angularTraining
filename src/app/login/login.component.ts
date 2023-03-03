import {
  Component,
  DoCheck,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { AuthserviceService } from '../common/authservice.service';
import { MainService } from '../main.service';
import { LoginService } from './login.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnChanges, OnInit, DoCheck, OnDestroy {
  toggle: boolean = true;
  @Input() counter: any;
  @Input() item: any;
  @Output() updateOutput = new EventEmitter<any>();
  @Input() needle: string = '';
  @Input() haystack: string = '';
  public result: any = [];
  @Output() isloggedin = new EventEmitter<any>();
  value: any = 'one way binding';
  tbColspan = '2';
  pClass = 'colorClass';
  form: any = {
    name: 'abc',
    email: 'abc@gmail.com',
    city: 'daman',
    password: 'xyzabc',
  };
  val = 11;
  imageFound: any = '';
  userFormfdf = {
    name: '',
    age: '',
    email: '',
    phoneNumber: '',
    password: '',
  };
  isvalid: boolean = false;
  returnUrl: any;

  signupUsers : any[] = [];

  signupobj:any = {
    username: '',
    email: '',
    password:''
  }
  ngOnInit(): void{
    const localData = localStorage.getItem('signupUsers');
    if(localData != null){
      this.signupUsers = JSON.parse(localData);
    }
  }
  onSignUp(){
    this.signupUsers.push(this.signupobj);
    localStorage.setItem('signupUsers',JSON.stringify(this.signupUsers));
    this.signupobj = {
      username: '',
      email: '',
      password:''
    }
  }
  loginObj:any ={
    username: '',
    password:''
  }
  onLogin(){
    this.btnSubmit(this.loginObj);
  }
  constructor(
    _serive: MainService,
    private loginservice: LoginService,
    private auth: AuthserviceService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    console.log('course', _serive.getCourses());
    console.log(this.loginservice.setLoginDetails().city);
    console.log('inside constructor');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('inside ngOnChanges', this.counter, changes);
    const regEx = new RegExp('(' + this.needle + ')', 'i');
    this.result = this.haystack.split(regEx);
  }

  ngDoCheck(): void {
    console.log('inside ngDoCheckdfdf');
  }

  ngOnDestroy(): void {
    console.log('inside ngOnDestroy');
  }
  callToogle() {
    this.toggle = this.toggle ? false : true;
  }

  update() {
    console.log('update btn clicked');
  }

  keyPressed(value: any) {
    console.log('key entered pressed', value);
  }

  btnSave() {
    console.log('form Values', this.form);
  }
  btnSubmit(userForm: any) {
    console.log('userForm', userForm);
    this.auth
      .login(userForm.username, userForm.password)
      .subscribe((res) => {
        if (res.status == 200) {
          this.isloggedin.emit(true);
          this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
          console.log('returnUrl', this.returnUrl);
          this.router.navigate([this.returnUrl]);
        }
      });
  }
}
