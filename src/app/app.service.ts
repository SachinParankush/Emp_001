import { Injectable } from '@angular/core';
import { IfStmt } from '@angular/compiler';


@Injectable()
export class AppState {
// -----------------------------------------------------------------------
  // Local Variables
  // -----------------------------------------------------------------------
  
  // To hold login profile related information
  checkOutData = {    
    "itemCount": 0,
    "itemTotal": 0,
    "grandTotal": 0,
    "CGST": 0,
    "SGST":0,
    "deliveryPrice":0,
    "cart_Data" : []    
  }
  checkOutJSON;

  mobile_no;
  user_id;
  area_id;
  address_id;
  city_id;
  area_Details;
  email_id;
  outlet_id;
  get_Address_Data : any;

  outLetArray: any;

  // -----------------------------------------------------------------------------
  // Constructor
  //-----------------------------------------------------------------------------
  constructor() {

    
    this.mobile_no=localStorage.getItem('mobile_no');
    this.user_id=localStorage.getItem('user_id'); 
    this.email_id=localStorage.getItem('email_id'); 
    this.area_id=localStorage.getItem('area_id'); 
    this.address_id=localStorage.getItem('address_id'); 
    this.city_id=localStorage.getItem('city_id'); 
    this.area_Details=localStorage.getItem('area_Details'); 
    this.outlet_id=localStorage.getItem('outlet_id'); 
    this.checkOutJSON=JSON.parse(localStorage.getItem('checkOutData')); 

    if (this.checkOutData.cart_Data.length == 0 && this.checkOutJSON > 0) {
    this.checkOutData.itemCount = this.checkOutJSON.itemCount;
    this.checkOutData.itemTotal = this.checkOutJSON.itemTotal;
    this.checkOutData.grandTotal = this.checkOutJSON.grandTotal;
    this.checkOutData.CGST = this.checkOutJSON.CGST;
    this.checkOutData.SGST = this.checkOutJSON.SGST;
    this.checkOutData.deliveryPrice = this.checkOutJSON.deliveryPrice;
    this.checkOutData.cart_Data = this.checkOutJSON.cart_Data;
    }
    
    
  }



  // resetData() {

  //   this.globalLoginData = {
  //     "brand_name":"",    
  //     "organisation_name": "",
  //     "bid": "",
  //     "user_id":"",
  //     "no_org": ""     
  //   }
  //   this.outLetArray=[];
  // }

  // -------------------------------------------------------------------------------------
  // ngOnInit
  // ------------------------------------------------------------------------------------
  ngOnInit() {}

  clearData(){
    localStorage.clear();
    this.checkOutData = {    
      "itemCount": 0,
      "itemTotal": 0,
      "grandTotal": 0,
      "CGST": 0,
      "SGST":0,
      "deliveryPrice":0,
      "cart_Data" : []    
    }
    this.checkOutJSON = "";

    this.mobile_no = "";
    this.user_id = "";
    this.area_id = "";
    this.address_id = "";
    this.city_id = "";
    this.area_Details = "";
    this.email_id = "";
    this.outlet_id = "";
    this.get_Address_Data = "";
    this.outLetArray = "";
  }

}
 