import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { empireMenu } from './empireNoMenu.routes';
import { empireNoMenu } from './empireNoMenu.component';
import { SignupComponent } from './signup/signup.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { BrandSelectComponent } from './brand-select/brand-select.component';

export const routes = [
  { path: '', component: empireNoMenu, pathMatch: 'full' }
];

@NgModule({
  imports: [ 
    SharedModule,
    empireMenu,
  ],
  declarations: [SignupComponent, SignInComponent, BrandSelectComponent],
    providers:[DatePipe]
})
export class empireNoModule { 
  
}