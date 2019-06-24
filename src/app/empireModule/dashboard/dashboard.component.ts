import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AppState } from '../../app.service';
import { empireApiService } from '../../empire-api-service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  address_Details: any;

  empireDetails = [];
  karamaDetails = [];
  vegetareaDetails = [];

  cardDetails = [];
  //  = [
  //   {
  //     "HotelName": "Empire",
  //     "Address": "Next to BSNL, 80 Feet Rd, HAL 2nd Stage, Indiranagar, Bengaluru, Karnataka 560038",
  //     "id": "11",
  //     "location": "Indiranagar",
  //     "image": "../../../assets/img/empire-hotel.png"
  //   },
  //   {
  //     "HotelName": "Empire",
  //     "Address": "Near, Plot No. 103 1st Cross Rd, Jyoti Nivas College Rd, Industrial Area, 5th Block, Koramangala, Bengaluru, Karnataka 560095",
  //     "id": "12",
  //     "location": "Koramangala",
  //     "image": "../../../assets/img/vegetarea.png"
  //   },
  //   {
  //     "HotelName": "Empire",
  //     "Address": "36, Church St, Shanthala Nagar, Ashok Nagar, Bengaluru, Karnataka 560001",
  //     "id": "13",
  //     "location": "Ashok Nagar",
  //     "image": "../../../assets/img/karama.png"
  //   },
  //   {
  //     "HotelName": "Empire",
  //     "Address": "36, Church St, Shanthala Nagar, Ashok Nagar, Bengaluru, Karnataka 560001",
  //     "id": "13",
  //     "location": "Ashok Nagar",
  //     "image": "../../../assets/img/empire-hotel.png"
  //   }, 
  //   {
  //     "address": "EMPIRE RESTAURANT A Unit of NKP Empire Ventures Pvt.Ltd Kalidasa Road,V.V Mohalla ,Mysore Ph.No:0821-4299222",
  //     "branch_id": 18,
  //     "branch_name": "MYS",
  //     "brand_name": "Empire",
  //     "img": "http://empireapps.in/empire/images/brands/1515688131.jpeg",
  //     "outlet_desc": "EMPIRE RESTAURANT. No. 2820/1. 8th Cross. Kalidasa Road.  VV. Mohalla.               Mysore - 570002.                      .                   Manager. Mr. Abdul  - 91 7026610017",
  //     "outlet_fullname": "MYSORE"
  //   }
  // ]


  constructor(private router: Router,private EmpireAppState: AppState,private activatedRoute: ActivatedRoute, public EmpireApiService: empireApiService) {
    alert(this.EmpireAppState.address_id)
    this.address_Details = window.atob(activatedRoute.snapshot.params['id']);
    this.getBarnchDetails(this.address_Details);
    alert(JSON.stringify(this.address_Details));
  }

  ngOnInit() {
  }

  getMenu(data) {
    let hashedData = window.btoa(data);
    this.router.navigate(['/menuDetails/menu', hashedData]);
  }

  getBarnchDetails(data) {
    var paramsData = {
      "area": data
    }
    this.EmpireApiService.getBranchDetails(paramsData).subscribe(
      (resp: any) => {
        for (let i in resp) {
          if (resp[i].brand_name == 'Empire') {
            this.cardDetails = [];
            this.empireDetails.push(resp[i])
            this.cardDetails = this.empireDetails;
          }
          if (resp[i].brand_name == 'Karama') {
            this.karamaDetails.push(resp[i])
          }
          if (resp[i].brand_name == 'VegetArea') {
            this.vegetareaDetails.push(resp[i])
          }
        }
      })
  }

  cardFilter(data) {
    if (data == 'Empire') {
      this.cardDetails = [];
      if (this.empireDetails.length == 0) {
        this.cardDetails = []
      }
      else {
        this.cardDetails = this.empireDetails;
      }
    }
    if (data == 'Karama') {
      this.cardDetails = [];
      if (this.karamaDetails.length == 0) {
        this.cardDetails = []
      }
      else {
        this.cardDetails = this.karamaDetails;
      }
    }
    if (data == 'VegetArea') {
      this.cardDetails = [];
      if (this.vegetareaDetails.length == 0) {
        this.cardDetails = []
      }
      else {
        this.cardDetails = this.vegetareaDetails;
      }
    }

  }

}
