import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-metrics',
  templateUrl: './metrics.component.html',
  styleUrls: ['./metrics.component.scss']
})
export class MetricsComponent implements OnInit {

  // now = moment().format('dddd');
  // now1 = moment().subtract(1, 'days').format('dddd');
  // now2 = moment().subtract(2, 'days').format('dddd');
  // now3 = moment().subtract(3, 'days').format('dddd');
  // now4 = moment().subtract(4, 'days').format('dddd');
  // now5 = moment().subtract(5, 'days').format('dddd');
  // now6 = moment().subtract(6, 'days').format('dddd');

  orderEdits = 10;
  cancelledOrders = 0;
  acceptedOrders = 90.65;
  goodFoodReady = 99;

  constructor() { }

  ngOnInit() {
  }

}
