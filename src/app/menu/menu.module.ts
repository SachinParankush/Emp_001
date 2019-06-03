import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { menuROUTES } from './menu.routes';
import { menuComponent } from './menu.component';
import { LayoutModule } from '../layout/layout.module';
import { MenuDetailsComponent } from './menu-details/menu-details.component';
import { CountdownModule } from 'ngx-countdown';

export const routes = [
  { path: '', component: menuComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [ 
    SharedModule,
    menuROUTES,
    LayoutModule,
    CountdownModule
  ],
  declarations: [MenuDetailsComponent],
    providers:[DatePipe]
})
export class menuModule { 
  
}