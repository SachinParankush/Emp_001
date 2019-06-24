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

  mobile_no;
  user_id;
  area_id;
  address_id;
  city_id;

  get_Address_Data : any;

  outLetArray: any;

  // -----------------------------------------------------------------------------
  // Constructor
  //-----------------------------------------------------------------------------
  constructor() {

    
    // this.mobile_no=localStorage.getItem('mobile_no');
    // this.user_id=localStorage.getItem('user_id'); 
    // this.area_id=localStorage.getItem('area_id'); 
    // this.address_id=localStorage.getItem('address_id'); 
    // this.city_id=localStorage.getItem('city_id'); 

    // localStorage.setItem('bid', this.globalLoginData.bid);
    // localStorage.setItem('user_id', this.globalLoginData.user_id);
    // localStorage.setItem('no_org', this.globalLoginData.no_org);
    
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

}
 