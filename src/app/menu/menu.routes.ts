import { Routes, RouterModule }  from '@angular/router';
import { menuComponent } from './menu.component';
import { LayoutComponent } from '../layout/layout.component';
import { MenuDetailsComponent } from './menu-details/menu-details.component';

const menuRoutes: Routes = [     
            { path: '', component: LayoutComponent, canActivate: [], children: [    
            { path: '', redirectTo: 'menu', pathMatch: 'full' },
            { path: 'menu', component:MenuDetailsComponent},
            // { path: 'preparingOrder', component:PreparingOrderComponent},
            // { path: 'readyOrders', component:ReadyOrdersComponent},
            // { path: 'PastOrders', component:PastOrdersComponent},

            // Not found
            { path: '**', redirectTo: 'menu' }    
    ]
} 

];

export const menuROUTES = RouterModule.forChild(menuRoutes);
  