import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-animals',
  templateUrl: './animals.page.html',
  styleUrls: ['./animals.page.scss'],
})
export class AnimalsPage {

  constructor(private router: Router) { }

  barnacle() {
    this.router.navigate(['barnacle']);
  }

  bottlenose() {
    this.router.navigate(['bottlenose']);
  }

  pelican() {
    this.router.navigate(['pelican']);
  }

  cannonball() {
    this.router.navigate(['cannonball']);
  }

  horseshoe() {
    this.router.navigate(['horseshoe']);
  }

  laughing() {
    this.router.navigate(['laughing']);
  }

  loggerhead() {
    this.router.navigate(['loggerhead']);
  }

  manatee() {
    this.router.navigate(['manatee']);
  }

  moon() {
    this.router.navigate(['moon']);
  }

  otter() {
    this.router.navigate(['otter']);
  }

  osprey() {
    this.router.navigate(['osprey']);
  }

  oyster() {
    this.router.navigate(['oyster']);
  }

  drum() {
    this.router.navigate(['drum']);
  }

  fiddler() {
    this.router.navigate(['fiddler']);
  }

  egret() {
    this.router.navigate(['egret']);
  }

  ngOnInit() {
  }

}
