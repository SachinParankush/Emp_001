import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

  loginForm: FormGroup;
  loginFormOTP: FormGroup;
  showMainContent: Boolean = true;
  value = "send OTP";

  constructor(private fb: FormBuilder) {

    this.loginForm = this.fb.group({

      mobile_no: ['', [Validators.required, Validators.maxLength(12), Validators.minLength(10), Validators.pattern('[0-9]+')]],
      // password: ['', [Validators.required, Validators.maxLength(15), Validators.minLength(6)]],
      emailId: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]],

      // OTP: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(6)]],
    });

    this.loginFormOTP = this.fb.group({

      password: ['', [Validators.required, Validators.maxLength(15), Validators.minLength(6)]],
      OTP: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(6)]],
    });


  }

  ngOnInit() {
  }
  get f() { return this.loginForm.controls; }

  onSubmit() {
    
    if (this.loginForm.valid) {
      this.showMainContent = this.showMainContent ? false : true;
      this.loginForm.controls['mobile_no'].disable()
      this.loginForm.controls['emailId'].disable()
      this.value = "Resend OTP";
      return;
    } else {
      for (let c in this.loginForm.controls) {
        this.loginForm.controls[c].markAsTouched();
      }
  }
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.loginForm.value))
  }


  submit() {
    
    if (this.loginForm.valid) {
      return;
    } else {
      for (let c in this.loginFormOTP.controls) {
        this.loginFormOTP.controls[c].markAsTouched();
    }
  }
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.loginFormOTP.value))
  }


}
