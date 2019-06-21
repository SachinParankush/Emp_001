import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { empireROUTES } from './empire.routes';
import { empireComponent } from './empire.component';
import { LayoutModule } from '../layout/layout.module';
import { LandingComponent } from './landing/landing.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { genericModule } from '../genericComponent/genericComponent.module';
import { AddressComponent } from './address/address.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';


export const routes = [
  { path: '', component: empireComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [ 
    SharedModule,
    empireROUTES,
    LayoutModule,
    genericModule
    // genericModule
  ],
  declarations: [LandingComponent, DashboardComponent, AddressComponent, ForgotPasswordComponent],
    providers:[DatePipe]
})
export class empireModule { 
  
}