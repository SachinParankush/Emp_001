import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { empireROUTES } from './empire.routes';
import { empireComponent } from './empire.component';
import { BaseComponentComponent } from './base-component/base-component.component';
import { WelcomeComponentComponent } from './welcome-component/welcome-component.component';
import { LayoutModule } from '../layout/layout.module';


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
  declarations: [BaseComponentComponent, WelcomeComponentComponent],
    providers:[DatePipe]
})
export class empireModule { 
  
}