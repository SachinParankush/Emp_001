import { Component, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { ExternalLibraryService } from './util';
import { AppState } from "../../app.service";
import { empireApiService } from '../../empire-api-service';
import Swal from 'sweetalert2';

declare let Razorpay: any;

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  dynamicClass1;
  dynamicClass2;
  cod = true;
  rpay = false;
  cart_Count = 0;
  subTotal = 0;
  cgst = 0;
  sgst = 0;
  deliver_Charges = 0;
  grand_total = 0;
  cartItems: any;

  cashOnDelivery = {
    "user_id": "",
    "outlet_id": "",
    "address_id": "",
    "total_amount": 0,
    "service_charge": "10",
    "total_items": 0,
    "order_details": [],
    "mode": "cash",
    "alltax_details": 0,
    "total_charge": "0"
  }

  ccData = {
    "item_id": "",
    "item_rate": "",
    "item_qty": 0,
    "hdmain_id": 0,
    "outlet_id": ""
  }

  ngOnInit() {

    this.razorpayService
      .lazyLoadLibrary('https://checkout.razorpay.com/v1/checkout.js')
      .subscribe();
  }


  constructor(private razorpayService: ExternalLibraryService, private cd: ChangeDetectorRef, private empireAppState: AppState,
    private empireApiService: empireApiService) {
    // this.cart_Count = this.empireAppState.checkOutData.itemCount;
    this.cartData()
    this.report(1)
  }
  name = 'Angular';
  response;
  razorpayResponse;
  showModal = false;

  RAZORPAY_OPTIONS = {
    "key": "rzp_test_RS9FYe5RzsB5ll",
    "amount": 0,
    "name": "Empire",
    "order_id": "",
    "description": "Bill Payment",
    "image": "https://livestatic.novopay.in/resources/img/nodeapp/img/Logo_NP.jpg",
    "prefill": {
      "name": "",
      "email": this.empireAppState.email_id,
      "contact": this.empireAppState.mobile_no,
      "method": ""
    },
    "modal": {},
    "theme": {
      "color": "#0096C5"
    }
  };




  public proceed() {

    this.RAZORPAY_OPTIONS.amount = (this.grand_total * 100);
    // binding this object to both success and dismiss handler
    this.RAZORPAY_OPTIONS['handler'] = this.razorPaySuccessHandler.bind(this);

    // this.showPopup();

    let razorpay = new Razorpay(this.RAZORPAY_OPTIONS)
    razorpay.open();
  }

  public razorPaySuccessHandler(response) {
    console.log(response);
    this.razorpayResponse = `Razorpay Response`;
    this.showModal = true;
    this.cd.detectChanges()
    document.getElementById('razorpay-response').style.display = 'block';
  }



  report(index) {
    if (index == 1) {
      this.dynamicClass1 = 'active';
      this.dynamicClass2 = '';
      this.cod = true;
      this.rpay = false;

    }
    if (index == 2) {
      this.dynamicClass2 = 'active';
      this.dynamicClass1 = '';
      this.cod = false;
      this.rpay = true;

    }

  }

  cartData() {


    let ccData = {
      "item_id": "",
      "item_rate": "",
      "item_qty": 0,
      "hdmain_id": 0,
      "outlet_id": ""
    }

    this.cashOnDelivery.user_id = this.empireAppState.user_id;
    this.cashOnDelivery.outlet_id = this.empireAppState.outlet_id;
    this.cashOnDelivery.address_id = this.empireAppState.address_id;

    if (this.empireAppState.checkOutData.cart_Data.length == 0) {
      this.cartItems = this.empireAppState.checkOutJSON.cart_Data;
      this.cart_Count = this.empireAppState.checkOutJSON.itemCount;
      this.subTotal = this.empireAppState.checkOutJSON.itemTotal;
      this.grand_total = this.empireAppState.checkOutJSON.grandTotal;
      this.cgst = this.empireAppState.checkOutJSON.CGST;
      this.sgst = this.empireAppState.checkOutJSON.SGST;
      this.deliver_Charges = this.empireAppState.checkOutJSON.deliveryPrice;
      //////////////////// COD  ///////////////////////////////
      this.cashOnDelivery.total_amount = this.empireAppState.checkOutJSON.grandTotal;
      this.cashOnDelivery.total_items = this.empireAppState.checkOutJSON.itemCount;
      for (let i in this.empireAppState.checkOutJSON.cart_Data) {
        this.ccData.item_id = this.empireAppState.checkOutJSON.cart_Data[i].dish_id;
        this.ccData.item_rate = this.empireAppState.checkOutJSON.cart_Data[i].dish_price;
        this.ccData.item_qty = this.empireAppState.checkOutJSON.cart_Data[i].itemCount;
        this.ccData.outlet_id = this.empireAppState.outlet_id;
        this.cashOnDelivery.order_details.push(this.ccData);
        ccData = {
          "item_id": "",
          "item_rate": "",
          "item_qty": 0,
          "hdmain_id": 0,
          "outlet_id": ""
        }
      }
    }
    else {
      this.cartItems = this.empireAppState.checkOutData.cart_Data;
      this.cart_Count = this.empireAppState.checkOutData.itemCount;
      this.subTotal = this.empireAppState.checkOutData.itemTotal;
      this.grand_total = this.empireAppState.checkOutData.grandTotal;
      this.cgst = this.empireAppState.checkOutData.CGST;
      this.sgst = this.empireAppState.checkOutData.SGST;
      this.deliver_Charges = this.empireAppState.checkOutData.deliveryPrice;
      //////////////////// COD  ///////////////////////////////
      this.cashOnDelivery.total_amount = this.empireAppState.checkOutData.grandTotal;
      this.cashOnDelivery.total_items = this.empireAppState.checkOutData.itemCount;
      for (let i in this.empireAppState.checkOutData.cart_Data) {
        this.ccData.item_id = this.empireAppState.checkOutData.cart_Data[i].dish_id;
        this.ccData.item_rate = this.empireAppState.checkOutData.cart_Data[i].dish_price;
        this.ccData.item_qty = this.empireAppState.checkOutData.cart_Data[i].itemCount;
        this.ccData.outlet_id = this.empireAppState.outlet_id;
        this.cashOnDelivery.order_details.push(this.ccData);
        ccData = {
          "item_id": "",
          "item_rate": "",
          "item_qty": 0,
          "hdmain_id": 0,
          "outlet_id": ""
        }
      }
    }
  }

  cash_On_Delivery() {
    // alert("Hiiii")

    // console.log(JSON.stringify(this.cashOnDelivery));
    // this.empireApiService.save_Order_Details(this.cashOnDelivery).subscribe(
    //   (resp: any) => {
    //     alert(JSON.stringify(resp))
    //   });

    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      type: 'warning',
      showCancelButton: false,
      confirmButtonText: 'Yes, Place Order!',
    }).then((result) => {

      this.empireApiService.save_Order_Details(this.cashOnDelivery).subscribe(
        (resp: any) => {
          if (resp.code == 200) {
            Swal.fire(
              'Success!',
              'Your Order has been Placed Successfully.',
              'success'
            )
          } else {
            Swal.fire(
              'Failed!',
              'Your Order has not been Placed.',
              'error'
            )
          }
        });

    })


  }



}
