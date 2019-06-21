import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { empireApiService } from '../../empire-api-service';
import { AppState } from '../../app.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  title = 'Angular Form';
  loginForm: FormGroup;
  submitted = false;
  cookieValue = 'UNKNOWN';

  constructor(private cookie: CookieService,private fb: FormBuilder,private router: Router, private EmpireApiService:empireApiService,private EmpireAppState: AppState) {
    this.loginForm = this.fb.group({      
      mobile_no: ['', [Validators.required,Validators.maxLength(12),Validators.minLength(10),Validators.pattern('[0-9]+')]],
      password: ['', [Validators.required,Validators.maxLength(15),Validators.minLength(6)]],
      
   });

  }

  ngOnInit() {

  }

  onSubmit() {
      this.submitted = true;

      if (this.loginForm.valid) {
        var params = {
          "mobile_no": this.loginForm.value.mobile_no,
          "password": this.loginForm.value.password,
        }
        this.EmpireApiService.signIn(params).subscribe(
          (res: any) => { 
            if(res.code==200){
            this.EmpireAppState.user_id = res.user_id.toString();
            this.EmpireAppState.mobile_no = res.mobile_no;
            this.router.navigate(['/empire/Address']);
            this.cookie.set( this.EmpireAppState.user_id, this.EmpireAppState.mobile_no );
            console.log(this.cookie.get(this.EmpireAppState.mobile_no ));
          }
          else{
            alert("Invalid User Name or Password")
          }
          })
      }
  }
}
