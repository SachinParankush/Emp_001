import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { empireROUTES } from './empire.routes';
import { empireComponent } from './empire.component';
import { LayoutModule } from '../layout/layout.module';
import { LandingComponent } from './landing/landing.component';
import { DashboardComponent } from './dashboard/dashboard.component';


export const routes = [
  { path: '', component: empireComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [ 
    SharedModule,
    empireROUTES,
    LayoutModule,
    // genericModule
  ],
  declarations: [LandingComponent, DashboardComponent],
    providers:[DatePipe]
})
export class empireModule { 
  
}