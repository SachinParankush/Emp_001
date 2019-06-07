import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  title = 'Angular Form';
  angForm: FormGroup;
  a = false;

  constructor(private fb: FormBuilder) {

    this.angForm = this.fb.group({
      name: ['', Validators.required ],
      address: ['', Validators.required ]
   });
    
  }

  ngOnInit() {

  }

  addNewAdrs(){
     this.a = true;
  }

  aaaa(){
    this.a = false;
  }
}
