import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.page.html',
  styleUrls: ['./overview.page.scss'],
})
export class OverviewPage {

  constructor(private router: Router) { }

  FS1861() {
    this.router.navigate(['construction']);
  }

  First() {
    this.router.navigate(['first-battle']);
  }

  Struggle() {
    this.router.navigate(['struggle']);
  }

  After() {
    this.router.navigate(['after']);
  }

  ngOnInit() {
  }

}
