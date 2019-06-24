import { Component, OnInit } from '@angular/core';
import { AppState } from "../../app.service";

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  constructor(private empireAppState: AppState) {
    this.empireAppState.clearData();
   }

  ngOnInit() {
  }

}
