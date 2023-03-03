import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { product } from './interface';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  getItem() {
    throw new Error('Method not implemented.');
  }
  baseUrl = 'https://fakestoreapi.com/products/'
  header = {
    "content-type":'application/json',
  }
  constructor(private http:HttpClient) { }
  getAllProducts(){
    let headerRequest = new HttpHeaders(this.header);
    return this.http.get(this.baseUrl,{headers:headerRequest});
  }
  getSingleProduct(id:number){
    let headerRequest = new HttpHeaders(this.header);
    let url = `${this.baseUrl}/${id}`
    return this.http.get(url,{headers:headerRequest});
  }
  editSingleProduct(id:number,productDetail:product){
    let headerRequest = new HttpHeaders(this.header);
    let url = `${this.baseUrl}/${id}`
    return this.http.put(url,productDetail,{headers:headerRequest});
  }
}
