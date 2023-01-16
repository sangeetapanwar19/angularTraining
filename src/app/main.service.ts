import {Injectable} from "@angular/core" 
export class MainService {

  constructor() { }

  getCourses(){
    return ['c','c++','java','php']
  }
  setaddress(){
    return{
      "city":"Daman",
      "state":"Daman",
      "country":"india"
    }
  }
}
