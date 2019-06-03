import { Component, OnInit } from '@angular/core';
import { UserblockService } from './userblock.service';
import { Router } from '@angular/router';


@Component({
    selector: 'app-userblock',
    templateUrl: './userblock.component.html',
    styleUrls: ['./userblock.component.scss']
})
export class UserblockComponent implements OnInit {
    user: any;
    constructor(public userblockService: UserblockService,public router: Router,) {

        this.user = {
            picture: 'assets/img/identifystrengths.PNG'
        };
    }

    ngOnInit() {
    }

    userBlockIsVisible() {
        return this.userblockService.getVisibility();
    }

    routeNavigate(item){
        // alert(item);
        if(item == 'AddnewItems')
        {
            this.router.navigate(['/billing/AddnewItems']);
        }
        if(item == 'ViewItems')
        {
            this.router.navigate(['/billing/ViewItems']);
        }
        if(item == 'DeleteItems')
        {
            this.router.navigate(['/billing/DeleteItems']);
        }
        if(item == 'NewBilling')
        {
            this.router.navigate(['/billing/NewBilling']);
        }
        if(item == 'ViewBilling')
        {
            this.router.navigate(['/billing/ViewBilling']);
        }
        if(item == 'Logout')
        {
            this.router.navigate(['/routesnomenu/signup']);
        }
        
    }

}
