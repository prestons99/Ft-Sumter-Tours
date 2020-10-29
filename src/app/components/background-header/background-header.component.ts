import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'app-background-header',
	templateUrl: './background-header.component.html',
	styleUrls: ['./background-header.component.scss'],
})
export class BackgroundHeaderComponent implements OnInit {


	@Input('background') background : String;

	constructor() { }

	ngOnInit() { }

}
