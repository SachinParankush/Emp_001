import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  title = 'Angular Form';
  angForm: FormGroup;

  constructor(private fb: FormBuilder) {

    this.angForm = this.fb.group({
      name: ['', Validators.required ],
      address: ['', Validators.required ]
   });
    
  }

  ngOnInit() {

  }
}
