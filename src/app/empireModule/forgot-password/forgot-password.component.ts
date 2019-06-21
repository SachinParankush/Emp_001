import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

  angForm: FormGroup;

  constructor(private fb: FormBuilder) {

    this.angForm = this.fb.group({

      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      OTP: ['', [Validators.required, Validators.minLength(4)]],
    });

  }

  ngOnInit() {
  }
  get f() { return this.angForm.controls; }

  onSubmit() {

    if (this.angForm.invalid) {
      return;
    }

    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.angForm.value))
  }

}
