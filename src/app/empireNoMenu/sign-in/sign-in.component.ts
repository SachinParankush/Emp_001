import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { empireApiService } from '../../empire-api-service';
import { AppState } from '../../app.service';

@Component({
  selector: 'app-sign-in1',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  title = 'Angular Form';
  angForm: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder) {

    this.angForm = this.fb.group({
      name: ['', Validators.required ],
      address: ['', Validators.required ]
   });
    
  }

  ngOnInit() {
    this.angForm = this.fb.group({
      
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      OTP: ['', [Validators.required, Validators.minLength(4)]],
   });


  }
  get f() { return this.angForm.controls; }

  onSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      if (this.angForm.invalid) {
          return;
      }

      alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.angForm.value))
  }
}
