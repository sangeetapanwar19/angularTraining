import { Component } from '@angular/core';
import { CommonService } from './common.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angularTraining';
  loggedin: boolean = false;

  constructor(private auth: CommonService){
    if(localStorage.getItem('token') != null){
        this.loggedin=true;
    }
  }
  checkloginstatus(event:any){
    this.loggedin=event;
}
  products = [
    {
      title : 'Product 1',
      id: 1,
      desc: 'abc1'
    },
    {
      title : 'Product 2',
      id: 2,
      desc: 'abc2'
    },
    {
      title : 'Product 3',
      id: 3,
      desc: 'abc3'
    }
  ]
  ProductId:any = null;
  getData(event:any){
    console.log(event);
  }
  assignData(event:any){
    console.log(event);
    this.ProductId = event;
  }
}
