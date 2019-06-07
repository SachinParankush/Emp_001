import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
    submitted = false;
    
    City: any = ['Bangalore', 'Mysore']

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {

    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      mobileNo: ['', [Validators.required, Validators.minLength(10)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
      cityName: ['', [Validators.required]],
      Street: ['', Validators.required],
      DoorNo: ['', Validators.required],
      Landmark: ['', Validators.required],
      Address: ['', Validators.required],
      
  }, {
      
  });
  }
  // changeCity(e) {
  //   console.log(e.value)
  //   this.cityName.setValue(e.target.value, {
  //     onlySelf: true
  //   })
  // }

  // // Getter method to access formcontrols
  // get cityName() {
  //   return this.registerForm.get('cityName');
  // }
  get f() { return this.registerForm.controls; }

  onSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      if (this.registerForm.invalid) {
          return;
      }

      alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value))
  }
  

}

