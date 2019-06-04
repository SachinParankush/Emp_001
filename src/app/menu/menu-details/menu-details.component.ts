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


  @ViewChild('ref') ref;
  backUpArray: any;
  Side_Menu_Data;
  item_data;
  item_data1;
  menuFormGroup: FormGroup;
  data: Date = new Date();

  ELEMENT_DATA = [
    {
      "MainCourse": "Quick Bites",
      "Subcourse":
        [
          {
            "dish_name": "Pulav",
            "dish_price": "55",
            "item_discription": "Its Made with Love",
            "item_category":"veg"
          },
          {
            "dish_name": "Rice Bath",
            "dish_price": "75",
            "item_discription": "Its Made with Love and Care",
            "item_category":"veg"
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
            "item_category":"veg"
          },
          {
            "dish_name": "Non-Veg Salad",
            "dish_price": "75",
            "item_discription": "Its Made with Love and Care",
            "item_category":"nonveg"
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
            "item_category":"veg"
          },
          {
            "dish_name": "Non-Veg Soup",
            "dish_price": "75",
            "item_discription": "Its Made with Love and Care",
            "item_category":"nonveg"
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
            "item_category":"veg"
          },
          {
            "dish_name": "Curry",
            "dish_price": "75",
            "item_discription": "Its Made with Love and Care",
            "item_category":"nonveg"
          }
        ]
    }
  ];


  constructor(private _scrollToService: ScrollToService, private empireApiService: empireApiService, private modalService: BsModalService, private fb: FormBuilder, private router: Router) {
  }

  ngOnInit() {
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
