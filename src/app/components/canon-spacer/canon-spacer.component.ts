import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
	selector: 'app-canon-spacer',
	templateUrl: './canon-spacer.component.html',
	styleUrls: ['./canon-spacer.component.scss'],
	encapsulation: ViewEncapsulation.None,
})
export class CanonSpacerComponent implements OnInit {

	@Input('color') color = 'light';

	constructor() { }

	ngOnInit() { }

}
