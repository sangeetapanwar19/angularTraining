import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonService } from '../common.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.scss']
})
export class SingleProductComponent implements OnInit{
  id: any;
  @Output() removeValue :EventEmitter<null> = new EventEmitter<null>();
  productDetail:any;
  constructor(private _commonService:CommonService,private route: ActivatedRoute){
    this.id = this.route.snapshot.paramMap.get('id');
  }
  ngOnInit(){
    this.getSingleProductDetail();
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
  editSingleProduct(){
    let obj = this.productDetail;
    obj.title = 'MENS CASUAL SHIRTS';
    this._commonService.editSingleProduct(this.id,obj).subscribe({
      next: (updateDetail)=>{
        this.productDetail = updateDetail
        console.log(updateDetail);
      },
      error: (error)=>{
        console.log(error);
      }
    })
  }
}
