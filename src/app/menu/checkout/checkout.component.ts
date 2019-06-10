import { Component, OnInit, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';
var moment = require('moment');

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  @ViewChild('lineChart') private chartRef;
  chart: any;
  a = ["Food Ready Correct","Food Ready Pressed Early"];
  b = [0, 0];
  dynamicClass1;
  dynamicClass2;
  dynamicClass3;
  dynamicClass4;
  dynamicClass5;
  dynamicClass6;
  dynamicClass7;
  date;

  now = moment().format('dddd');
  now1 = moment().subtract(1, 'days').format('dddd');
  now2 = moment().subtract(2, 'days').format('dddd');
  now3 = moment().subtract(3, 'days').format('dddd');
  now4 = moment().subtract(4, 'days').format('dddd');
  now5 = moment().subtract(5, 'days').format('dddd');
  now6 = moment().subtract(6, 'days').format('dddd');

  orderEdits = 10;
  cancelledOrders = 0;
  acceptedOrders = 90.65;
  goodFoodReady = 99;

  num = 10;
  den = 58;


  constructor() { 
    this.report(1)
   }

  ngOnInit() {
    this.chart = new Chart(this.chartRef.nativeElement, {
      type: 'doughnut',
      data: {
        labels: this.a,
        datasets: [
          {
            label: "Population (millions)",
            backgroundColor: ["#0375A7", "#28C3D5"],
            data: this.b
          }
        ]
      },
      options: {
        title: {
          display: true,
          text: ''
        }
      }
    });
  }

  report(index){
    this.b = [];
      if(index == 1){
        this.dynamicClass1 = 'active';
        this.dynamicClass2 = '';
        this.dynamicClass3 = '';
        this.dynamicClass4 = '';
        this.dynamicClass5 = '';
        this.dynamicClass6 = '';
        this.dynamicClass7 = '';
        this.date = moment().format('ddd, DD MMM');
        this.orderEdits = 0;
        this.cancelledOrders = 1;
        this.acceptedOrders = 80.65;
        this.goodFoodReady = 90;
        this.b = [456, 533];
        this.num = 10;
        this.den = 58;
      }
      if(index == 2){
        this.dynamicClass2 = 'active';
        this.dynamicClass1 = '';
        this.dynamicClass3 = '';
        this.dynamicClass4 = '';
        this.dynamicClass5 = '';
        this.dynamicClass6 = '';
        this.dynamicClass7 = '';
        this.date = moment().subtract(1, 'days').format('ddd, DD MMM');
        this.orderEdits = 2;
        this.cancelledOrders = 1;
        this.acceptedOrders = 60.65;
        this.goodFoodReady = 79;
        this.b = [956, 133];
        this.num = 20;
        this.den = 58;
      }
      if(index == 3){
        this.dynamicClass3 = 'active';
        this.dynamicClass1 = '';
        this.dynamicClass2 = '';
        this.dynamicClass4 = '';
        this.dynamicClass5 = '';
        this.dynamicClass6 = '';
        this.dynamicClass7 = '';
        this.date = moment().subtract(2 ,'days').format('ddd, DD MMM');
        this.orderEdits = 19;
        this.cancelledOrders = 0;
        this.acceptedOrders = 96.65;
        this.goodFoodReady = 99;
        this.b = [226, 253];
        this.num = 30;
        this.den = 58;
      }
      if(index == 4){
        this.dynamicClass4 = 'active';
        this.dynamicClass1 = '';
        this.dynamicClass2 = '';
        this.dynamicClass3 = '';
        this.dynamicClass5 = '';
        this.dynamicClass6 = '';
        this.dynamicClass7 = '';
        this.date = moment().subtract(3, 'days').format('ddd, DD MMM');
        this.orderEdits = 50;
        this.cancelledOrders = 0;
        this.acceptedOrders = 90.65;
        this.goodFoodReady = 99;
        this.b = [826, 353];
        this.num = 40;
        this.den = 58;
      }
      if(index == 5){
        this.dynamicClass5 = 'active';
        this.dynamicClass1 = '';
        this.dynamicClass2 = '';
        this.dynamicClass3 = '';
        this.dynamicClass4 = '';
        this.dynamicClass6 = '';
        this.dynamicClass7 = '';
        this.date = moment().subtract(4, 'days').format('ddd, DD MMM');
        this.orderEdits = 10;
        this.cancelledOrders = 0;
        this.acceptedOrders = 70.65;
        this.goodFoodReady = 90;
        this.b = [26,553];
        this.num = 50;
        this.den = 58;
      }
      if(index == 6){
        this.dynamicClass6 = 'active';
        this.dynamicClass1 = '';
        this.dynamicClass2 = '';
        this.dynamicClass3 = '';
        this.dynamicClass4 = '';
        this.dynamicClass5 = '';
        this.dynamicClass7 = '';
        this.date = moment().subtract(5, 'days').format('ddd, DD MMM');
        this.orderEdits = 20;
        this.cancelledOrders = 0;
        this.acceptedOrders = 60.65;
        this.goodFoodReady = 99;
        this.b = [626,223];
        this.num = 45;
        this.den = 58;
      }
      if(index == 7){
        this.dynamicClass7 = 'active';
        this.dynamicClass1 = '';
        this.dynamicClass2 = '';
        this.dynamicClass3 = '';
        this.dynamicClass4 = '';
        this.dynamicClass5 = '';
        this.dynamicClass6 = '';
        this.date = moment().subtract(6, 'days').format('ddd, DD MMM');
        this.orderEdits = 1;
        this.cancelledOrders = 0;
        this.acceptedOrders = 60.65;
        this.goodFoodReady = 89;
        this.b = [526,653];
        this.num = 55;
        this.den = 58;
      }
  }

}
