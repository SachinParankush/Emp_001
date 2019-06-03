import { Injectable } from '@angular/core';


@Injectable()
export class AppState {
// -----------------------------------------------------------------------
  // Local Variables
  // -----------------------------------------------------------------------
  
  // To hold login profile related information
  globalLoginData = {    
    
    "brand_name":"",    
    "organisation_name": "",
    "bid": "",
    "user_id":"" ,
    "no_org": "" 
    
  }

  outLetArray: any;

  // -----------------------------------------------------------------------------
  // Constructor
  //-----------------------------------------------------------------------------
  constructor() {
    // localStorage.setItem('brand_name', this.globalLoginData.brand_name);
    // localStorage.setItem('organisation_name', this.globalLoginData.organisation_name);
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
 