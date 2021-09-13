import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Plugins } from '@capacitor/core';
import { ParseService } from '../parse.service';
import { Email } from '@teamhive/capacitor-email';
import { Platform } from '@ionic/angular';


@Component({
	selector: 'app-settings',
	templateUrl: './settings.page.html',
	styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {


	info: any;
	email: Email;



	constructor(
		private parseService: ParseService,
		private router: Router,
		private platform : Platform
	) {
		try{
			this.parseService.config.load(true);
		}catch(e){}
		try {
			this.email = new Email();
		} catch (e) {

		}

	}

	goToInfo(type) {
		this.router.navigate(['info-page'], {
			queryParams: { type }
		});
	}

	ngOnInit() {
		Plugins.Device.getInfo().then((data) => {
			this.info = data;
		}, () => { });
	}

	async customerSupport() {

		if(this.platform.is('android')){
			return this.sendEmail();
		}

		let hasPermission = await (this.email.hasPermission());
		if (!hasPermission) {
			try {
				await this.email.requestPermission();
				this.sendEmail();
				return;
			} catch (e) {}
		}

		this.sendEmail();
	}

	sendEmail(){
		let version = this.info && this.info.appVersion ? this.info.appVersion : "";
		let build = this.info && this.info.appBuild ? this.info.appBuild : "";
		this.email.open({
			subject : "Fort Sumter Tours Customer Support",
			to: ["cvonlehe@netgalaxystudios.com"],
			body: "I need help with Fort Sumter Tours. Here is my app information. Version: " + version + " - Build: " + build,
		}).then(() => { }).catch(() => { });
	}

}
