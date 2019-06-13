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
    
    City: any = ['Bangalore', 'Mysore']
    SearchCity: any = ['Bangalore', 'Mysore']

  constructor(private formBuilder: FormBuilder,public EmpireApiService:empireApiService) { 
    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      mobileNumber: ['', [Validators.required, Validators.minLength(10)]],
      emailId: ['', [Validators.required, ]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      city: ['', [Validators.required]],
      area: ['', [Validators.required]],
      street: ['', Validators.required],
      doorNumber: ['', Validators.required],
      landMark: ['', Validators.required],
      fullAddress: ['', Validators.required],
    });
  }

  ngOnInit() {

  
  }

  onSubmit() {
    if (this.registerForm.valid) {
      this.EmpireApiService.register(this.registerForm.value).subscribe(
        (res: any) => {
          console.log(JSON.stringify(res))
        });
    }
    else {
      for (let c in this.registerForm.controls) {
        this.registerForm.controls[c].markAsTouched();
        alert(JSON.stringify(c))
      }
      // alert("4545454545")
    }
    
  }
  

}

