import { Injectable, Input, EventEmitter } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from "@angular/http";
import 'rxjs/Rx';
import { Observable } from "rxjs/Rx";
import * as config from './providers/config';
import { forkJoin } from 'rxjs/observable/forkJoin';

@Injectable()
export class empireApiService {
    private headers = new Headers({
        'Content-Type': 'application/json',
        'charset': 'UTF-8'
    });
    private options = new RequestOptions({ headers: this.headers });
    constructor(private http: Http) { }

    /* ----------------------------------------------------------------------------------
    **   Http call to create api 
    ------------------------------------------------------------------------------------*/
    createData(createData): Observable<any> {
        var url = this.getUrl(config.SERVERTYPE, config.CREATEDATA)
        console.log("calling create method");
        return this.http.post(url,
            JSON.stringify(createData),
            this.options)
            .map(res => res.json()
            );
    }

    /* ----------------------------------------------------------------------------------
    **   Http call to update  api 
    ------------------------------------------------------------------------------------*/
    updateData(updateData): Observable<any> {
        console.log("calling updateData method");
        var url = this.getUrl(config.SERVERTYPE, config.UPADTEDATA)
        return this.http.post(url,
            JSON.stringify(updateData),
            this.options)
            .map(res => res.json()
            );
    }

    /* ----------------------------------------------------------------------------------
    **  Http call to retrieveByKey api 
    ------------------------------------------------------------------------------------*/
    retrieveByKey(retrive): Observable<any> {
        var url = this.getUrl(config.SERVERTYPE, config.RETRIEVEBYKEY);
        console.log("calling retrieveByKey method : " + JSON.stringify(retrive));
        return this.http.post(url,
            JSON.stringify(retrive),
            this.options)
            .map(res => res.json()
            );
    }

    /* ----------------------------------------------------------------------------------
  **  Http call to retrive all
  ------------------------------------------------------------------------------------*/
    retrieveAll(retrive): Observable<any> {
        var url = this.getUrl(config.SERVERTYPE, config.RETRIEVEALL);
        console.log("calling RETRIEVEALL method");
        return this.http.post(url,
            JSON.stringify(retrive),
            this.options)
            .map(res => res.json()
            );
    }

    /* ----------------------------------------------------------------------------------
  **  Http call to retrive menu data
  ------------------------------------------------------------------------------------*/
    retrieveMenuData(retrive): Observable<any> {
        var url = this.getUrl(config.SERVERTYPE, config.RETRIVEMENUDATA);
        console.log("calling RETRIVEMENUDATA method");
        return this.http.post(url,
            JSON.stringify(retrive),
            this.options)
            .map(res => res.json()
            );
    }

    /* ----------------------------------------------------------------------------------
   **  Http call to retrive outofstockmenu data
   ------------------------------------------------------------------------------------*/
    retrieveOutOfStockData(retrive): Observable<any> {
        var url = this.getUrl(config.SERVERTYPE, config.RETRIVEOUTOFSTOCKDATA);
        console.log("calling RETRIVEOUTOFSTOCKDATA method");
        return this.http.post(url,
            JSON.stringify(retrive),
            this.options)
            .map(res => res.json()
            );
    }

    /* ----------------------------------------------------------------------------------
   **  Http call to retrive outlet data
   ------------------------------------------------------------------------------------*/
    retrieveOutletData(retrive): Observable<any> {
        var url = this.getUrl(config.SERVERTYPE, config.RETRIVEOUTLETDATA);
        console.log("calling RETRIVEOUTLETDATA method");
        return this.http.post(url,
            JSON.stringify(retrive),
            this.options)
            .map(res => res.json()
            );
    }

    /* ----------------------------------------------------------------------------------
    **  Http call to order status change
    ------------------------------------------------------------------------------------*/
    orderStatusChange(retrive): Observable<any> {
        var url = this.getUrl(config.SERVERTYPE, config.ORDERSTATUSCHANGE);
        console.log("calling ORDERSTATUSCHANGE method");
        return this.http.post(url,
            JSON.stringify(retrive),
            this.options)
            .map(res => res.json()
            );
    }
    /* ----------------------------------------------------------------------------------
    **  Http call to order data based on status.
    ------------------------------------------------------------------------------------*/
    getOrderData(retrive): Observable<any> {
        var url = this.getUrl(config.SERVERTYPE, config.GETORDERDATA);
        console.log("calling GETORDERDATA method");
        return this.http.post(url,
            JSON.stringify(retrive),
            this.options)
            .map(res => res.json()
            );
    }
    /* ----------------------------------------------------------------------------------
    **  Http call to order count.
    ------------------------------------------------------------------------------------*/
    getOrderCount(retrive): Observable<any> {
        var url = this.getUrl(config.SERVERTYPE, config.GETORDERCOUNT);
        console.log("calling GETORDERDATA method");
        return this.http.post(url,
            JSON.stringify(retrive),
            this.options)
            .map(res => res.json()
            );
    }

    /* ----------------------------------------------------------------------------------
    **  Http call to create signUp data 
    ------------------------------------------------------------------------------------*/
    signUp(createSignUpTable): Observable<any> {
        var url = this.getUrl(config.SERVERTYPE, config.SIGNUP);
        console.log("calling signUp method");
        return this.http.post(url,
            JSON.stringify(createSignUpTable),
            this.options)
            .map(res => res.json()
            );
    }

    /* ----------------------------------------------------------------------------------
    **  Http call to  signIn data 
    ------------------------------------------------------------------------------------*/
    signIn(signIn): Observable<any> {
        var url = this.getUrl(config.SERVERTYPE, config.SIGNIN);
        console.log("calling signIn method");
        return this.http.post(url,
            JSON.stringify(signIn),
            this.options)
            .map(res => res.json()
            );
    }

    /* ----------------------------------------------------------------------------------
    **   Http call to delete data in tblattachment
    ------------------------------------------------------------------------------------*/
    deleteData(params): Observable<any> {
        var url = this.getUrl(config.SERVERTYPE, config.DELETEDATA);
        console.log("calling service  deleteData ");
        return this.http.post(url,
            JSON.stringify(params),
            this.options)
            .map(res => res.json()
            );
    }

    /* ----------------------------------------------------------------------------------
  **  Http call to create register data 
  ------------------------------------------------------------------------------------*/
    register(createRegisterTable): Observable<any> {
        var url = this.getUrl(config.SERVERTYPE, config.REGISTER);
        console.log("calling register method");
        return this.http.post(url,
            JSON.stringify(createRegisterTable),
            this.options)
            .map(res => res.json()
            );
    }

    /* ----------------------------------------------------------------------------------
    **  Http call to create getAddressData data 
    ------------------------------------------------------------------------------------*/
    getAddressData(params): Observable<any> {
        var url = this.getUrl(config.SERVERTYPE, config.GETALLADDRESS);
        console.log("calling getAddressData method");
        return this.http.post(url,
            JSON.stringify(params),
            this.options)
            .map(res => res.json()
            );
    }

    /* ----------------------------------------------------------------------------------
    **  Http call to create register data 
    ------------------------------------------------------------------------------------*/
    getAreaList(): Observable<any> {
        var url = this.getUrl(config.SERVERTYPE, config.GETAREALIST);
        console.log("calling getAreaList method");
        return this.http.get(url)
            .map(res => res.json()
            );
    }
    /* ----------------------------------------------------------------------------------
    **  Http call to create saveMultipleAddress data 
    ------------------------------------------------------------------------------------*/
    saveMultipleAddress(params): Observable<any> {
        var url = this.getUrl(config.SERVERTYPE, config.ADD_MULTIPLE_ADDRESS);
        console.log("calling saveMultipleAddress method");
        return this.http.post(url,
            JSON.stringify(params),
            this.options)
            .map(res => res.json()
            );
    }

    /* ----------------------------------------------------------------------------------
    **  Http call to get getBranchDetails data 
    ------------------------------------------------------------------------------------*/
    getBranchDetails(params): Observable<any> {
        var url = this.getUrl(config.SERVERTYPE, config.GET_BRANCH_DETAILS);
        console.log("calling getBranchDetails method");
        return this.http.post(url,
            JSON.stringify(params),
            this.options)
            .map(res => res.json()
            );
    }
    /* ----------------------------------------------------------------------------------
    **  Http call to get getMenuDetails data 
    ------------------------------------------------------------------------------------*/
    getMenuDetails(params): Observable<any> {
        var url = this.getUrl(config.SERVERTYPE, config.GET_OUTLET_MENU);
        console.log("calling getMenuDetails method");
        return this.http.post(url,
            JSON.stringify(params),
            this.options)
            .map(res => res.json()
            );
    }
    /* ----------------------------------------------------------------------------------
    **  Http call to  save_Order_Details  
    ------------------------------------------------------------------------------------*/
    save_Order_Details(params): Observable<any> {
        var url = this.getUrl(config.SERVERTYPE, config.SAVEORDER);
        console.log("calling save_Order_Details method");
        return this.http.post(url,
            JSON.stringify(params),
            this.options)
            .map(res => res.json()
            );
    }


           /* ----------------------------------------------------------------------------------
    **  Http call to get getEditAddress data 
    ------------------------------------------------------------------------------------*/
    getEditAddress(params): Observable<any> {
        var url = this.getUrl(config.SERVERTYPE, config.EDIT_ADDRESS);
        console.log("calling getEditAddress method");
        return this.http.post(url,
            JSON.stringify(params),
            this.options)
            .map(res => res.json()
            );
    }

           /* ----------------------------------------------------------------------------------
    **  Http call to get getDeleteAddress data 
    ------------------------------------------------------------------------------------*/
    getDeleteAddress(params): Observable<any> {
        var url = this.getUrl(config.SERVERTYPE, config.DELETE_ADDRESS);
        console.log("calling getDeleteAddress method");
        return this.http.post(url,
            JSON.stringify(params),
            this.options)
            .map(res => res.json()
            );
    }


    // API is get the Apiendpoint url based on the parameter passed handling both Web and Device
    getUrl(type, keyUrl: any): string {
        // var url
        // if(type == "DEVELOPMENT") {
        //     url = config.SERVER_URL_DEV + keyUrl    
        // } else if (type == "UAT"){
        //     url = config.SERVER_URL_UAT + keyUrl
        //     return url;
        // } else if (type == "PRODUCTION"){
        //     url = config.SERVER_URL_PROD + keyUrl
        //     return url;
        // }
        return keyUrl;
        // console.log("The API URL IS " + url) 

    }

}