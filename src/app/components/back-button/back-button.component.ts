import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
	selector: 'app-back-button',
	templateUrl: './back-button.component.html',
	styleUrls: ['./back-button.component.scss'],
})
export class BackButtonComponent implements OnInit {


	@Input('color') color = 'light';

	constructor(
		private navCtrl : NavController
	) { }

	ngOnInit() { }


	goBack(){
		this.navCtrl.back();
	}

}
