import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { empireApiService } from '../../empire-api-service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  title = 'Angular Form';
  angForm: FormGroup;
  submitted = false;


  constructor(private fb: FormBuilder,private router: Router, private EmpireApiService:empireApiService) {
    
  }

  ngOnInit() {
    this.angForm = this.fb.group({
      
      mobile_no: ['', [Validators.required]],
      password: ['', [Validators.required]],
      
   });

  }
  get f() { return this.angForm.controls; }

  onSubmit() {
      this.submitted = true;

      if (this.angForm.valid) {
        var params = {
          "mobile_no": this.angForm.value.mobile_no,
          "password": this.angForm.value.password,
        }
        this.EmpireApiService.signIn(params).subscribe(
          (res: any) => {  
            if (res.code == '200') {
              this.router.navigate(['/empire/Dashboard']);
            }
          })
      }
  }
}
