import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

  loginForm: FormGroup;
  showMainContent: Boolean = true;
  clicked = false;

  constructor(private fb: FormBuilder) {

    this.loginForm = this.fb.group({

      mobile_no: ['', [Validators.required,Validators.maxLength(12),Validators.minLength(10),Validators.pattern('[0-9]+')]],
      password: ['', [Validators.required,Validators.maxLength(15),Validators.minLength(6)]],
      emailId: ['', [Validators.required,Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]],

      OTP: ['', [Validators.required, Validators.minLength(4),Validators.maxLength(6)]],
    });

  }

  ngOnInit() {
  }
  get f() { return this.loginForm.controls; }

  onSubmit() {
     this.showMainContent = this.showMainContent ? false : true;

    if (this.loginForm.invalid) {
      return;
    }
    this.showMainContent = this.showMainContent ? false : true;

    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.loginForm.value))
  }

  
}
