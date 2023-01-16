import { Component, EventEmitter,Output } from '@angular/core';
import * as productData from "../user.json";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  products = productData;
  @Output() productDetail :EventEmitter<any> = new EventEmitter<any>();
  constructor(){
    console.log(this.products.users);
  }
  passData(product:any){
    this.productDetail.emit(product);
  }
}
