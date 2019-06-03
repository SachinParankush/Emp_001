import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { empireApiService } from '../../empire-api-service';
import { AppState } from '../../app.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  signUp: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private empireApiService: empireApiService, private empireAppState: AppState) {
    this.signUp = this.fb.group({
      'email': [null, Validators.compose([Validators.required])],
      'password': [null, Validators.compose([Validators.required])],
    });
  }

  ngOnInit() {
  }
  validatePage() {

    if (this.signUp.valid) {
      var params = {
        "mail_id": this.signUp.value.email,
        "password": this.signUp.value.password,
      }
      this.empireApiService.signIn(params).subscribe(
        (res: any) => {  
          if (res.code == '200') {
            if(res.no_org == 1 )
            {

              this.empireApiService.retrieveOutletData(params).subscribe(
                (resp: any) => {
                  // alert("--------->>>" + JSON.stringify(res))
                  this.empireAppState.outLetArray = resp;
                  
                  this.empireAppState.globalLoginData.bid = res.data[0].bid;
                  this.empireAppState.globalLoginData.brand_name = res.data[0].brand_name;
                  this.empireAppState.globalLoginData.organisation_name = res.data[0].organisation_name;
                  this.empireAppState.globalLoginData.user_id = res.data[0].user_id;
                  this.empireAppState.globalLoginData.no_org = res.no_org;
                  // alert("======>" +  JSON.stringify(this.empireAppState.globalLoginData))
                  // localStorage.setItem('brand_name', this.empireAppState.globalLoginData.brand_name);
                  // localStorage.setItem('organisation_name', this.empireAppState.globalLoginData.organisation_name);
                  // localStorage.setItem('bid', this.empireAppState.globalLoginData.bid);
                  // localStorage.setItem('user_id', this.empireAppState.globalLoginData.user_id);
                  // localStorage.setItem('no_org', this.empireAppState.globalLoginData.no_org);
                  this.router.navigate(['/orders/NewOrders']);
                })
                // alert("2"+JSON.stringify(this.empireAppState.outLetArray))
             
           
            }
            else if(res.no_org >  1  &&  res.no_org  !=  0  )
            {
              // this.router.navigate(['/routesNoMenu/brandSelect']);
            }
            
          }
        })
    } else {
      for (let c in this.signUp.controls) {
        this.signUp.controls[c].markAsTouched();
        this.signUp.controls[c].touched;
      }
    }

  }

}
