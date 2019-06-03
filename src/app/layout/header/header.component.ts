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
  profileImage: any;
  personId: any;  
  outLetDetails ; 
  searchText: any;
  backUpArray: any;

  // -----------------------------------------------------------------------
  // Constructor
  // -----------------------------------------------------------------------

  constructor(private router: Router,private empireAppState: AppState) {
   this.outLetDetails= this.empireAppState.outLetArray;
   this.backUpArray= this.empireAppState.outLetArray;
  }

  ngOnInit() { }

  logOut() {
    
  }

  temp(data, s) {
    return data.filter(e => e.Store_Name.includes(s) || e.Address.includes(s))
        .sort((a,b) => a.Store_Name.includes(s) && !b.Store_Name.includes(s) ? -1 : b.Store_Name.includes(s) && !a.Store_Name.includes(s) ? 1 :0);
  }
  
    prodFilter() {
  
      // this.httpdatanew = this.filtradoService.applyFilter(this.cardDetails, this.searchText)
      let a = this.temp(this.outLetDetails, this.searchText)
      console.log(this.searchText);
      this.outLetDetails = a;
      if (this.searchText == null || this.searchText == "") {
        this.outLetDetails = this.backUpArray
      }
  
    }


}
