import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fort-sumter',
  templateUrl: './fort-sumter.page.html',
  styleUrls: ['./fort-sumter.page.scss'],
})
export class FortSumterPage {

  constructor(private router: Router) { }

  go() {
    this.router.navigate(['amenities']);
  }

  yes() {
    this.router.navigate(['overview']);
  }

  beacon() {
    this.router.navigate(['beacon-locations']);
  }
}

