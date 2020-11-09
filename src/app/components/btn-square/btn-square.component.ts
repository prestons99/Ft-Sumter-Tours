import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
	selector: 'app-btn-square',
	templateUrl: './btn-square.component.html',
	styleUrls: ['./btn-square.component.scss'],
})
export class BtnSquareComponent implements OnInit {

	@Input('title') title : String = '';
	@Input('color') color : String = 'secondary';
	@Output('onClick') onClick : EventEmitter<any> = new EventEmitter();

	constructor() { }

	ngOnInit() { }

	handleOnClick(){
		this.onClick.next();
	}

}
