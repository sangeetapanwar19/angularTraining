import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.scss']
})
export class ProductViewComponent {
  @Input() id: any;
  @Output() removeValue :EventEmitter<null> = new EventEmitter<null>();
  productDetail:any;
  constructor(private _commonService:CommonService){

  }
  removeproduct(){
    this.removeValue.emit(null);
  }
  getSingleProductDetail(){
    this._commonService.getSingleProduct(this.id).subscribe({
      next: (productDetail)=>{
        this.productDetail = productDetail
      },
      error: (error)=>{
        console.log(error);
      }
    })
  }
}
