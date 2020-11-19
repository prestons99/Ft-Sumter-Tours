import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

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

	constructor(
		private navCtrl : NavController
	) { }


	goToWelcome(){
		this.navCtrl.navigateRoot(["/welcome"]);
	}

}
