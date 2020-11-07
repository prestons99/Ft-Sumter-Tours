import { Component, OnInit } from '@angular/core';
import { ParseService } from '../parse.service';

@Component({
	selector: 'app-welcome',
	templateUrl: './welcome.page.html',
	styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage implements OnInit {


	constructor(public parseService: ParseService) { }

	ngOnInit(){
		this.parseService.config.load(true);
	}


}
