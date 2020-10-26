import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-spirit-charleston',
  templateUrl: './spirit-charleston.page.html',
  styleUrls: ['./spirit-charleston.page.scss'],
})
export class SpiritCharlestonPage {

  constructor(private router: Router) { }

  amenitiesLC() {
    this.router.navigate(['spirit-chs-amenities']);
  }

  ngOnInit() {
  }

}
