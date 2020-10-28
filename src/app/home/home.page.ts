import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-home',
	templateUrl: './home.page.html',
	styleUrls: ['./home.page.scss'],
})
export class HomePage {


	public slidesOptions = {
		effect : "fade",
		fadeEffect: {
			crossFade: true
		},
		autoplay: {
			delay: 3000,
			loop: true
		}
	};

	constructor() { }

}
