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
