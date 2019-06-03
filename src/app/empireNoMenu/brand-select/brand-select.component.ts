import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-brand-select',
  templateUrl: './brand-select.component.html',
  styleUrls: ['./brand-select.component.scss']
})
export class BrandSelectComponent implements OnInit {

  cardDetails: any;

  
  constructor() { 
    this.cardDetails = [
      {
      "organisationName":"1",
      "brandName":"11"
    },
    {
      "organisationName":"2",
      "brandName":"21"
    },
    {
      "organisationName":"3",
      "brandName":"31"
    },
    ]
  }

  ngOnInit() {
  }

  cardClick(data){
    // alert(JSON.stringify(data))
  }

}
