import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppState } from "../../app.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {


  // -----------------------------------------------------------------------
  // Local variables
  // -----------------------------------------------------------------------
 
  areaDetails : any;

  // -----------------------------------------------------------------------
  // Constructor
  // -----------------------------------------------------------------------

  constructor(private router: Router,private empireAppState: AppState) {
   this.areaDetails= this.empireAppState.area_Details;
  }

  ngOnInit() { }

  

    logout(){
      this.areaDetails = "";
      this.empireAppState.clearData();
      this.empireAppState.area_Details = "";
      this.router.navigate(['/empire/Landing']);
    }

    


}
