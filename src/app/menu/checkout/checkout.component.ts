import { Component, OnInit, ViewChild,ChangeDetectorRef } from '@angular/core';
import { ExternalLibraryService } from './util';

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
  cart_Count = 1;
  subTotal = 0;
  cgst = 5;
  sgst = 5;
  deliver_Charges = 20;
  grand_total = 0;

  ngOnInit() {

    this.razorpayService
      .lazyLoadLibrary('https://checkout.razorpay.com/v1/checkout.js')
      .subscribe();
  }

  
  constructor(private razorpayService: ExternalLibraryService, private cd:  ChangeDetectorRef) {
    this.report(1)
   }
  name = 'Angular';
  response;
  razorpayResponse;
  showModal = false;

  RAZORPAY_OPTIONS = {
    "key": "rzp_test_RS9FYe5RzsB5ll",
    "amount": "",
    "name": "Empire",
    "order_id": "",
    "description": "Bill Payment",
    "image": "https://livestatic.novopay.in/resources/img/nodeapp/img/Logo_NP.jpg",
    "prefill": {
      "name": "",
      "email": "",
      "contact": "",
      "method": ""
    },
    "modal": {},
    "theme": {
      "color": "#0096C5"
    }
  };


  public proceed() {
    this.RAZORPAY_OPTIONS.amount = 100 + '00';

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

  // public test() {
  //   document.getElementById('response-modal').style.display = 'block';
  //   this.response = `dummy text`;
  // }


  
  ELEMENT_DATA = [
    {
      "MainCourse": "Quick Bites",
      "Subcourse":
        [
          {
            "dish_name": "Pulav",
            "dish_price": "55",
            "item_discription": "Its Made with Love",
            "item_category": "veg",
            "addToCart": false,
            "itemCount": 0,
            "item_total_price":0
          },
          {
            "dish_name": "Rice Bath",
            "dish_price": "75",
            "item_discription": "Its Made with Love and Care",
            "item_category": "veg",
            "addToCart": false,
            "itemCount": 0,
            "item_total_price":0
          }
        ]
    },
    {
      "MainCourse": "Salads",
      "Subcourse":
        [
          {
            "dish_name": "Veg Salad",
            "dish_price": "55",
            "item_discription": "Its Made with Love",
            "item_category": "veg",
            "addToCart": false,
            "itemCount": 0,
            "item_total_price":0
          },
          {
            "dish_name": "Non-Veg Salad",
            "dish_price": "75",
            "item_discription": "Its Made with Love and Care",
            "item_category": "nonveg",
            "addToCart": false,
            "itemCount": 0,
            "item_total_price":0
          }
        ]
    },
    {
      "MainCourse": "Soups",
      "Subcourse":
        [
          {
            "dish_name": "Veg Soup",
            "dish_price": "55",
            "item_discription": "Its Made with Love",
            "item_category": "veg",
            "addToCart": false,
            "itemCount": 0,
            "item_total_price":0
          },
          {
            "dish_name": "Non-Veg Soup",
            "dish_price": "75",
            "item_discription": "Its Made with Love and Care",
            "item_category": "nonveg",
            "addToCart": false,
            "itemCount": 0,
            "item_total_price":0
          }
        ]
    },
    {
      "MainCourse": "Indian",
      "Subcourse":
        [
          {
            "dish_name": "Rotii",
            "dish_price": "55",
            "item_discription": "Its Made with Love",
            "item_category": "veg",
            "addToCart": false,
            "itemCount": 0,
            "item_total_price":0
          },
          {
            "dish_name": "Curry",
            "dish_price": "75",
            "item_discription": "Its Made with Love and Care",
            "item_category": "nonveg",
            "addToCart": false,
            "itemCount": 0,
            "item_total_price":0
          }
        ]
    }
  ];

  cart_Data = [];

  report(index){
      if(index == 1){
        this.dynamicClass1 = 'active';
        this.dynamicClass2 = '';
        this.cod = true;
        this.rpay = false;
        
      }
      if(index == 2){
        this.dynamicClass2 = 'active';
        this.dynamicClass1 = '';
        this.cod = false;
        this.rpay = true;
        
      }
      
  }


  addtocart(data, data1, index, index1) {
    this.ELEMENT_DATA[index].Subcourse[index1].addToCart = true;
    this.ELEMENT_DATA[index].Subcourse[index1].itemCount = this.ELEMENT_DATA[index].Subcourse[index1].itemCount + 1;  
    this.ELEMENT_DATA[index].Subcourse[index1].item_total_price = parseInt(this.ELEMENT_DATA[index].Subcourse[index1].dish_price) *  this.ELEMENT_DATA[index].Subcourse[index1].itemCount; 
    this.cart_Data.push(data1);
    this.total_Amount_Cal();
  }

  addItem(data, data1, index, index1) {
    this.ELEMENT_DATA[index].Subcourse[index1].itemCount = this.ELEMENT_DATA[index].Subcourse[index1].itemCount + 1;
    this.ELEMENT_DATA[index].Subcourse[index1].item_total_price = parseInt(this.ELEMENT_DATA[index].Subcourse[index1].dish_price) *  this.ELEMENT_DATA[index].Subcourse[index1].itemCount;
    this.total_Amount_Cal();
  }

  removeItem(data, data1, index, index1) {
    if (this.ELEMENT_DATA[index].Subcourse[index1].itemCount == 1) {
      this.ELEMENT_DATA[index].Subcourse[index1].addToCart = false;
      this.ELEMENT_DATA[index].Subcourse[index1].itemCount = 0;
      this.ELEMENT_DATA[index].Subcourse[index1].item_total_price = 0;
      this.total_Amount_Cal();
    }
    else {
      this.ELEMENT_DATA[index].Subcourse[index1].itemCount = this.ELEMENT_DATA[index].Subcourse[index1].itemCount - 1;
      this.ELEMENT_DATA[index].Subcourse[index1].item_total_price = parseInt(this.ELEMENT_DATA[index].Subcourse[index1].dish_price) *  this.ELEMENT_DATA[index].Subcourse[index1].itemCount;
      this.total_Amount_Cal();
    }
  }

  total_Amount_Cal(){
    this.subTotal = 0;
    this.grand_total = 0;
    this.cart_Count = 0;
    for(let i in this.ELEMENT_DATA){
      for(let j in this.ELEMENT_DATA[i].Subcourse)
        if(this.ELEMENT_DATA[i].Subcourse[j].addToCart == true){
          this.cart_Count = this.cart_Count + 1;
          this.subTotal =  this.subTotal + this.ELEMENT_DATA[i].Subcourse[j].item_total_price;
        }
    }
    this.grand_total = this.subTotal + this.cgst + this.sgst + this.deliver_Charges;
  }

}
