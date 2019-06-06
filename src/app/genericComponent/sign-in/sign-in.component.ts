import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  title = 'Angular Form';
  angForm: FormGroup;
  submitted = false;


  constructor(private fb: FormBuilder,private router: Router) {

    
    
  }

  ngOnInit() {
    this.angForm = this.fb.group({
      
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      
   });

  }
  get f() { return this.angForm.controls; }

  onSubmit() {
      this.submitted = true;

      if (this.angForm.valid) {
        this.router.navigate(['/empire/Dashboard']);
          return;
      }
  }
}
