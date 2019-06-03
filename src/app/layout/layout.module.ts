import { LayoutComponent } from './layout.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';
import { UserblockComponent } from './sidebar/userblock/userblock.component';
import { UserblockService } from './sidebar/userblock/userblock.service';
import { SharedModule } from '../shared/shared.module';
import { OffsidebarComponent } from './offsidebar/offsidebar.component';
import { AppStateModule } from '../appstate.module';
@NgModule({
  imports: [
    // RouterModule,
    SharedModule,
    AppStateModule
      ],
  providers:[UserblockService],
  declarations: [LayoutComponent, 
                 HeaderComponent, 
                 SidebarComponent, 
                 UserblockComponent,
                 OffsidebarComponent,
                ],
  exports: [LayoutComponent, 
            HeaderComponent,
            SidebarComponent, 
            UserblockComponent,
            OffsidebarComponent]
}) 
export class LayoutModule { }
