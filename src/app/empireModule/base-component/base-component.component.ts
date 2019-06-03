import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-base-component',
  templateUrl: './base-component.component.html',
  styleUrls: ['./base-component.component.scss']
})
export class BaseComponentComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  ClickMe(){
    this.router.navigate(['/routesNoMenu/signUp']);
  }
}
