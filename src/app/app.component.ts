import { Component, HostBinding, OnInit } from '@angular/core';
import { SettingsService } from './core/settings/settings.service';
import { MenuService } from './core/menu/menu.service';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

    

    constructor(public settings: SettingsService,public menuService: MenuService) {
        
     }
   
    ngOnInit() {
       
    }
}
