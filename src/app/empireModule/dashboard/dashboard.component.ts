import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  
  cardDetails = [
    {
    "HotelName":"Empire",
    "Address":"Next to BSNL, 80 Feet Rd, HAL 2nd Stage, Indiranagar, Bengaluru, Karnataka 560038",
    "id":"11",
    "location":"Indiranagar",
    "image":"../../../assets/img/empire-hotel.png"
  },
  {
    "HotelName":"Empire",
    "Address":"Near, Plot No. 103 1st Cross Rd, Jyoti Nivas College Rd, Industrial Area, 5th Block, Koramangala, Bengaluru, Karnataka 560095",
    "id":"12",
    "location":"Koramangala",
    "image":"../../../assets/img/vegetarea.png"
  },
  {
    "HotelName":"Empire",
    "Address":"36, Church St, Shanthala Nagar, Ashok Nagar, Bengaluru, Karnataka 560001",
    "id":"13",
    "location":"Ashok Nagar",
    "image":"../../../assets/img/karama.png"
  },
  {
    "HotelName":"Empire",
    "Address":"36, Church St, Shanthala Nagar, Ashok Nagar, Bengaluru, Karnataka 560001",
    "id":"13",
    "location":"Ashok Nagar",
    "image":"../../../assets/img/empire-hotel.png"
  },
  ]
  constructor(private router: Router) { }

  ngOnInit() {
  }

  getMenu(data){
    // alert(data);
    this.router.navigate(['/menuDetails/menu']);
  }

}
