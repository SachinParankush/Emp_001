import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { empireApiService } from '../../empire-api-service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ScrollToService, ScrollToConfigOptions } from '@nicky-lenaers/ngx-scroll-to';

@Component({
  selector: 'app-menu-details',
  templateUrl: './menu-details.component.html',
  styleUrls: ['./menu-details.component.scss']
})
export class MenuDetailsComponent implements OnInit {


  minDate = new Date();
  checked: boolean = false;
  @ViewChild('ref') ref;

  // ELEMENT_DATA ;
  searchText;
  backUpArray: any;
  modalRef: BsModalRef;
  ELEMENT_DATA;
  Side_Menu_Data;
  item_data;
  item_data1;
  SearchMenu: any;
  menuFormGroup: FormGroup;
  outofstock;

  data: Date = new Date();
  settings = {
    bigBanner: true,
    timePickker: true,
    format: 'dd-MMM-yyyy hh:mm a',
    defaultOpen: false,
    closeOnSelect: false
  }
  config: { leftTime: number; size: string; };
  testContent = 1;
  IsmodelShow: boolean;

  // nostock = [

  //   {
  //     "MainCourse": "Quick Bites",
  //     "Subcourse":
  //       [
  //         {
  //           "dish_name": "Pulav",
  //           "dish_price": "55",
  //           "item_discription": "Its Made with Love",
  //           "item_category":"veg"
  //         },
  //         {
  //           "dish_name": "Rice Bath",
  //           "dish_price": "75",
  //           "item_discription": "Its Made with Love and Care",
  //           "item_category":"veg"
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
  //           "item_category":"veg"
  //         },
  //         {
  //           "dish_name": "Non-Veg Salad",
  //           "dish_price": "75",
  //           "item_discription": "Its Made with Love and Care",
  //           "item_category":"nonveg"
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
  //           "item_category":"veg"
  //         },
  //         {
  //           "dish_name": "Non-Veg Soup",
  //           "dish_price": "75",
  //           "item_discription": "Its Made with Love and Care",
  //           "item_category":"nonveg"
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
  //           "item_category":"veg"
  //         },
  //         {
  //           "dish_name": "Curry",
  //           "dish_price": "75",
  //           "item_discription": "Its Made with Love and Care",
  //           "item_category":"nonveg"
  //         }
  //       ]
  //   }
  // ];

  arrayOne(n: number): any[] {
    return Array(n);
  }


  constructor(private _scrollToService: ScrollToService, private empireApiService: empireApiService, private modalService: BsModalService, private fb: FormBuilder, private router: Router) {
    this.getOrderDetails();
    this.menuFormGroup = this.fb.group({
      'togle': [null]
    });
  }

  ngOnInit() {


  }

  openModal(template: TemplateRef<any>, data?: any , index?: any,index2?: any,event?: any) {
    this.modalRef = this.modalService.show(template, { class: 'modal-lg' });
    this.item_data = data;
    // console.log(JSON.stringify(this.ELEMENT_DATA[index].Subcourse[index2]));
    if (event.checked == true) {
      this.ELEMENT_DATA[index].Subcourse[index2].dish_status = false;          
    } else {
      this.ELEMENT_DATA[index].Subcourse[index2].dish_status = true;
    }
  }

  openModal1(template1: TemplateRef<any>, data?: any) {
    this.modalRef = this.modalService.show(template1, { class: 'modal-lg' });
    this.item_data1 = data;
    console.log(this.item_data1)
  }
  getOrderDetails() {
    var params = {

    }
    this.empireApiService.retrieveMenuData(params).subscribe(
      (res: any) => {
        this.ELEMENT_DATA = res;
        this.backUpArray = res;
        this.Side_Menu_Data = res;
      })
  }


  getOrderDetails1() {
    var params = {

    }
    this.empireApiService.retrieveOutOfStockData(params).subscribe(
      (res: any) => {
        this.outofstock = res;
      })
  }
  modelDataSave() {
    
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

  close() {
    this.modalRef.hide();
  }

  ofs() {
    this.outofstock = []
    var params = {

    }
    if (this.ref._checked == true) {

      this.empireApiService.retrieveOutOfStockData(params).subscribe(
        (res: any) => {
          this.ELEMENT_DATA = res;
        })
    }
    if (this.ref._checked == false) {
      this.ELEMENT_DATA = []
      var params = {

      }
      this.empireApiService.retrieveMenuData(params).subscribe(
        (res: any) => {
          this.ELEMENT_DATA = res;
          this.backUpArray = res;
          this.Side_Menu_Data = res;
        })
    }
  }

  addNewItem() {
    window.open("http://localhost:4200/#/menuDetails/menu");
  }

  search(data) {
    console.log(data);
  }

  triggerScrollTo(data) {
    const config: ScrollToConfigOptions = {
      target: data.MainCourse
    };

    this._scrollToService.scrollTo(config);
  }

  device:number = 1;

  onChange(e) {
        if (e.checked == true) {
          this.device = 1;          
        } else {
          this.device = 0;         
        }
    }

}
