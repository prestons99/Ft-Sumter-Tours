import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-spirit-lowcountry',
  templateUrl: './spirit-lowcountry.page.html',
  styleUrls: ['./spirit-lowcountry.page.scss'],
})
export class SpiritLowcountryPage {

  constructor(private router: Router) { }

  amenitiesLC() {
    this.router.navigate(['spirit-low-amenities']);
  }

  ngOnInit() {
  }

}
