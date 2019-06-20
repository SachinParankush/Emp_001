import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { empireApiService } from '../../empire-api-service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ScrollToService, ScrollToConfigOptions } from '@nicky-lenaers/ngx-scroll-to';
import { AppState } from "../../app.service";
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-menu-details',
  templateUrl: './menu-details.component.html',
  styleUrls: ['./menu-details.component.scss']
})
export class MenuDetailsComponent implements OnInit {


  @ViewChild('ref') ref;
  backUpArray: any;
  Side_Menu_Data;
  item_data;
  item_data1;
  menuFormGroup: FormGroup;
  data: Date = new Date();
  cart_Count = 0;
  subTotal = 0;
  cgst =0;
  sgst = 0;
  deliver_Charges = 20;
  grand_total = 0;
  outLetId;
  SearchMenu: any;

  ELEMENT_DATA
  //  = [
  //   {
  //     "MainCourse": "Quick Bites",
  //     "Subcourse":
  //       [
  //         {
  //           "dish_name": "Pulav",
  //           "dish_price": "55",
  //           "item_discription": "Its Made with Love",
  //           "item_category": "veg",
  //           "addToCart": false,
  //           "itemCount": 0,
  //           "item_total_price":0
  //         },
  //         {
  //           "dish_name": "Rice Bath",
  //           "dish_price": "75",
  //           "item_discription": "Its Made with Love and Care",
  //           "item_category": "veg",
  //           "addToCart": false,
  //           "itemCount": 0,
  //           "item_total_price":0
  //         }
  //       ]
  //   },
  //   {
  //     "MainCourse": "Salads",
  //     "Subcourse":
  //       [
  //         {
  //           "dish_name": "Veg Salad",
  //           "dish_price": "55",
  //           "item_discription": "Its Made with Love",
  //           "item_category": "veg",
  //           "addToCart": false,
  //           "itemCount": 0,
  //           "item_total_price":0
  //         },
  //         {
  //           "dish_name": "Non-Veg Salad",
  //           "dish_price": "75",
  //           "item_discription": "Its Made with Love and Care",
  //           "item_category": "nonveg",
  //           "addToCart": false,
  //           "itemCount": 0,
  //           "item_total_price":0
  //         }
  //       ]
  //   },
  //   {
  //     "MainCourse": "Soups",
  //     "Subcourse":
  //       [
  //         {
  //           "dish_name": "Veg Soup",
  //           "dish_price": "55",
  //           "item_discription": "Its Made with Love",
  //           "item_category": "veg",
  //           "addToCart": false,
  //           "itemCount": 0,
  //           "item_total_price":0
  //         },
  //         {
  //           "dish_name": "Non-Veg Soup",
  //           "dish_price": "75",
  //           "item_discription": "Its Made with Love and Care",
  //           "item_category": "nonveg",
  //           "addToCart": false,
  //           "itemCount": 0,
  //           "item_total_price":0
  //         }
  //       ]
  //   },
  //   {
  //     "MainCourse": "Indian",
  //     "Subcourse":
  //       [
  //         {
  //           "dish_name": "Rotii",
  //           "dish_price": "55",
  //           "item_discription": "Its Made with Love",
  //           "item_category": "veg",
  //           "addToCart": false,
  //           "itemCount": 0,
  //           "item_total_price":0
  //         },
  //         {
  //           "dish_name": "Curry",
  //           "dish_price": "75",
  //           "item_discription": "Its Made with Love and Care",
  //           "item_category": "nonveg",
  //           "addToCart": false,
  //           "itemCount": 0,
  //           "item_total_price":0
  //         }
  //       ]
  //   }
  // ];

  cart_Data = [];

  constructor(private empireAppState: AppState, private _scrollToService: ScrollToService,
    private empireApiService: empireApiService, private modalService: BsModalService,
    private fb: FormBuilder, private router: Router, private activatedRoute: ActivatedRoute) {
      this.outLetId = window.atob(activatedRoute.snapshot.params['id']);
      this.getOrderDetails();
      // alert(this.outLetId)
  }

  ngOnInit() {
  }

  getOrderDetails() {
    var params = {
        "outlet_id": this.outLetId
    }
    this.empireApiService.getMenuDetails(params).subscribe(
      (res: any) => {
        this.ELEMENT_DATA = res;
        this.backUpArray = res;
        // this.Side_Menu_Data = res;
        // console.log(JSON.stringify(res))
      })
  }

  triggerScrollTo(data) {
    const config: ScrollToConfigOptions = {
      target: data.MainCourse
    };

    this._scrollToService.scrollTo(config);
  }

  // device: number = 1;
  // onChange(e) {
  //   if (e.checked == true) {
  //     this.device = 1;
  //   } else {
  //     this.device = 0;
  //   }
  // }

  addtocart(data, data1, index, index1) {
    this.ELEMENT_DATA[index].Subcourse[index1].addToCart = "true";
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
      this.ELEMENT_DATA[index].Subcourse[index1].addToCart = "false";
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
    this.cgst = 0;
    this.sgst = 0;
    for(let i in this.ELEMENT_DATA){
      for(let j in this.ELEMENT_DATA[i].Subcourse)
        if(this.ELEMENT_DATA[i].Subcourse[j].addToCart == "true"){
          this.cart_Count = this.cart_Count + 1;
          this.subTotal =  this.subTotal + this.ELEMENT_DATA[i].Subcourse[j].item_total_price;
          this.cgst = (this.subTotal*2.5)/100;
          this.sgst = (this.subTotal*2.5)/100;
          // this.empireAppState.checkOutData.cart_Data.push(this.ELEMENT_DATA[i].Subcourse[j]);

        }
    }
    this.grand_total = this.subTotal + this.cgst + this.sgst + this.deliver_Charges;
    // this.empireAppState.checkOutData.CGST = this.cgst
    // this.empireAppState.checkOutData.SGST = this.sgst
    // this.empireAppState.checkOutData.itemTotal = this.subTotal
    // this.empireAppState.checkOutData.grandTotal = this.grand_total
    // this.empireAppState.checkOutData.itemCount = this.cart_Count
  }

  checkOut(){
    this.subTotal = 0;
    this.grand_total = 0;
    this.cart_Count = 0;
    this.cgst = 0;
    this.sgst = 0;

    for(let i in this.ELEMENT_DATA){
      for(let j in this.ELEMENT_DATA[i].Subcourse)
        if(this.ELEMENT_DATA[i].Subcourse[j].addToCart == "true"){
          this.cart_Count = this.cart_Count + 1;
          this.subTotal =  this.subTotal + this.ELEMENT_DATA[i].Subcourse[j].item_total_price;
          this.cgst = (this.subTotal*2.5)/100;
          this.sgst = (this.subTotal*2.5)/100;
          this.empireAppState.checkOutData.cart_Data.push(this.ELEMENT_DATA[i].Subcourse[j]);

        }
    }
    
    this.grand_total = this.subTotal + this.cgst + this.sgst + this.deliver_Charges;
    this.empireAppState.checkOutData.CGST = this.cgst
    this.empireAppState.checkOutData.SGST = this.sgst
    this.empireAppState.checkOutData.itemTotal = this.subTotal
    this.empireAppState.checkOutData.grandTotal = this.grand_total
    this.empireAppState.checkOutData.itemCount = this.cart_Count
    this.router.navigate(['/menuDetails/checkout']);
  }

  temp(data, s) {
    return data.filter(e => e.MainCourse.toLowerCase().includes(s) || e.MainCourse.includes(s))
      .sort((a, b) => a.MainCourse.includes(s) && !b.MainCourse.includes(s) ? -1 : b.MainCourse.includes(s) && !a.MainCourse.includes(s) ? 1 : 0);
  
  
    }

  menuFilter() {
    let a = this.temp(this.ELEMENT_DATA, this.SearchMenu)
    this.ELEMENT_DATA = a;
    if (this.SearchMenu == null || this.SearchMenu == "") {
      this.ELEMENT_DATA = this.backUpArray
    }

  }

}
