import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angularTraining';
  
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
  getData(event:any){
    console.log(event);
  }
}
