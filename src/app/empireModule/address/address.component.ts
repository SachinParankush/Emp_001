import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

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

  City: any = ['Bangalore', 'Mysore']

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

  constructor(private formBuilder: FormBuilder) { }


  ngOnInit() {

    this.registerForm = this.formBuilder.group({
      cityName: ['', [Validators.required]],
      Street: ['', Validators.required],
      DoorNo: ['', Validators.required],
      Landmark: ['', Validators.required],
      Address: ['', Validators.required],

    }, {

      });
  }
  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }

    // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value))
  }

}
