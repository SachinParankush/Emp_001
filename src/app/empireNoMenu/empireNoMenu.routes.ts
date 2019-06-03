import { Routes, RouterModule }  from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { BrandSelectComponent } from './brand-select/brand-select.component';

const empireNoMenu: Routes = [  
            { path: '', redirectTo: 'signIn', pathMatch: 'full' },
            {path:'signUp', component:SignupComponent},
            {path:'signIn', component:SignInComponent},
            {path:'brandSelect', component:BrandSelectComponent},
            // Not found
            { path: '**', redirectTo: 'signIn' }

];

export const empireMenu = RouterModule.forChild(empireNoMenu);
  