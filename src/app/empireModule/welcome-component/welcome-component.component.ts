import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome-component',
  templateUrl: './welcome-component.component.html',
  styleUrls: ['./welcome-component.component.scss']
})
export class WelcomeComponentComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  ClickMe(){
    this.router.navigate(['/empire/BaseComponent']);
  }

}
