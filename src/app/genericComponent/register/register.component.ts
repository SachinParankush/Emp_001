import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { empireApiService } from '../../empire-api-service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;

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


  constructor(private formBuilder: FormBuilder, public EmpireApiService: empireApiService) {
    this.getAddressList();
    this.registerForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.maxLength(30)]],
      mobileNumber: ['', Validators.compose([Validators.required, Validators.maxLength(12), Validators.minLength(10),Validators.pattern('[0-9]+')])],
      emailId: ['', [Validators.required,Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(15)]],
      city: ['', [Validators.required]],
      area: ['', [Validators.required]],
      street: ['', [Validators.required, Validators.maxLength(20)]],
      doorNumber: ['', [Validators.required, Validators.maxLength(6)]],
      landMark: ['', [Validators.required,Validators.maxLength(50)]],
      fullAddress: ['', [Validators.required,Validators.maxLength(50)]],
    });
  }

  ngOnInit() {


  }

  onSubmit() {
    console.log(JSON.stringify(this.registerForm.value));
    if (this.registerForm.valid) {
      this.EmpireApiService.register(this.registerForm.value).subscribe(
        (res: any) => {
          console.log(JSON.stringify(res))
        });
    }
    else {
      for (let c in this.registerForm.controls) {
        this.registerForm.controls[c].markAsTouched();
      }
    }
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


}

