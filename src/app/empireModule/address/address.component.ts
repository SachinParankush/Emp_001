import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AppState } from '../../app.service';
import { empireApiService } from '../../empire-api-service';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})


export class AddressComponent implements OnInit {


  title = 'Angular Form';
  angForm: FormGroup;
  registerForm: FormGroup;
  submitted = false;
  flag = false;

  City = [
    {
      "city_id": 1,
      "city_name": "Bangalore"
    },
    {
      "city_id": 5,
      "city_name": "Mysore"
    }
  ]

  SearchCity: any = []
  areaJson = {
    "area_id": "",
    "area_name": ""
  }
  area1 = [];
  area2 = [];

  location_Details;

  cardDetails = [
    {
      "HotelName": "Empire",
      "Address": "Next to BSNL, 80 Feet Rd, HAL 2nd Stage, Indiranagar, Bengaluru, Karnataka 560038",
      "id": "11",
      "location": "Indiranagar",
      "image": "../../../assets/img/empire-hotel.png"
    },
    {
      "HotelName": "Empire",
      "Address": "36, Church St, Shanthala Nagar, Ashok Nagar, Bengaluru, Karnataka 560001",
      "id": "13",
      "location": "Ashok Nagar",
      "image": "../../../assets/img/karama.png"
    },
    {
      "HotelName": "Empire",
      "Address": "36, Church St, Shanthala Nagar, Ashok Nagar, Bengaluru, Karnataka 560001",
      "id": "13",
      "location": "Ashok Nagar",
      "image": "../../../assets/img/empire-hotel.png"
    },
  ]

  constructor(private formBuilder: FormBuilder, private router: Router, private EmpireAppState: AppState,
    public EmpireApiService: empireApiService) {
    this.getAddressList();
    this.getAllAddress();
    // this.location_Details = this.EmpireAppState.get_Address_Data;

    this.registerForm = this.formBuilder.group({
      city: ['', [Validators.required]],
      area: ['', Validators.required],
      doorNumber: ['', [Validators.required, Validators.maxLength(6)]],
      street: ['', [Validators.required, Validators.maxLength(20)]],
      landMark: ['', [Validators.required,Validators.maxLength(50)]],
      fullAddress: ['', [Validators.required,Validators.maxLength(50)]],
    });
  }


  ngOnInit() {


  }

  onSubmit() {
    var paramsData = {
      user_id: this.EmpireAppState.user_id,
      mobile_no: this.EmpireAppState.mobile_no,
      data: []
    }

    if (this.registerForm.valid) {
      paramsData.data.push(this.registerForm.value)
      console.log(JSON.stringify(paramsData))
      this.EmpireApiService.saveMultipleAddress(paramsData).subscribe(
        (resp: any) => {
          this.getAllAddress();
          this.registerForm.reset();
          this.flag = false;
        })
      return;
    }
  }

  addNewAdrs() {
    if (this.flag == false) {
      this.flag = true;
    } else {
      this.flag = false;
    }
  }

  selectAddress(data) {
    let hashedData = window.btoa(data.area_id);
    this.router.navigate(['/empire/Dashboard', hashedData]);
  }

  getAddressList() {
    this.EmpireApiService.getAreaList().subscribe(
      (resp: any) => {
        for (let i in resp.area) {
          if (resp.area[i].city == "Bangalore") {
            this.areaJson.area_id = resp.area[i].area_id;
            this.areaJson.area_name = resp.area[i].area_name;
            this.area1.push(this.areaJson);
            this.areaJson = {
              "area_id": "",
              "area_name": ""
            }
          }
          else if (resp.area[i].city == "Mysore") {
            this.areaJson.area_id = resp.area[i].area_id;
            this.areaJson.area_name = resp.area[i].area_name;
            this.area2.push(this.areaJson);
            this.areaJson = {
              "area_id": "",
              "area_name": ""
            }
          }
        }
      });
  }

  setArea() {
    this.SearchCity = [];
    if (this.registerForm.value.city == "Bangalore") {
      this.SearchCity = this.area1;
    } else {
      this.SearchCity = this.area2;
    }
  }

  getAllAddress() {
    var params = {
      "mobile_no": this.EmpireAppState.mobile_no,
      "user_id": this.EmpireAppState.user_id
    }
    alert(JSON.stringify(params));
    this.EmpireApiService.getAddressData(params).subscribe(
      (res: any) => {
        this.location_Details = res;
        console.log("Yooooooooooooo" + JSON.stringify(res));
      })
  }

}
