import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-marine-life',
  templateUrl: './marine-life.page.html',
  styleUrls: ['./marine-life.page.scss'],
})
export class MarineLifePage {

  constructor(private router: Router) { }

  impact() {
    this.router.navigate(['our-impact']);
  }

  animals() {
    this.router.navigate(['animals']);
  }

  ngOnInit() {
  }

}
