import { Routes, RouterModule }  from '@angular/router';
import { empireComponent } from './empire.component';
import { LayoutComponent } from '../layout/layout.component';
import { LandingComponent } from './landing/landing.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddressComponent } from './address/address.component';

const empireRoutes: Routes = [     
            { path: '', component: LayoutComponent, canActivate: [], children: [    
            { path: '', redirectTo: 'Landing', pathMatch: 'full' },
            { path: 'Landing', component:LandingComponent},
            { path: 'Dashboard', component:DashboardComponent},
            { path: 'Address', component:AddressComponent},

            // Not found
            { path: '**', redirectTo: 'Landing' }    
    ]
} 

];

export const empireROUTES = RouterModule.forChild(empireRoutes);
  