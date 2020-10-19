import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-our-fleet',
  templateUrl: './our-fleet.page.html',
  styleUrls: ['./our-fleet.page.scss'],
})
export class OurFleetPage {

  constructor(private router: Router) { }

  nextpage() {
    this.router.navigate(['spirit-lowcountry']);
  }

  charleston() {
    this.router.navigate(['spirit-charleston']);
  }

  ngOnInit() {
  }

}
