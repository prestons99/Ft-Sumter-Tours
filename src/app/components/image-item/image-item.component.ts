import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
	selector: 'app-image-item',
	templateUrl: './image-item.component.html',
	styleUrls: ['./image-item.component.scss'],
})
export class ImageItemComponent implements OnInit {


	@Input('background') background : String = '';
	@Input('title') title : String = '';
	@Output('onClick') onClick : EventEmitter<any> = new EventEmitter();

	constructor() { }

	ngOnInit() { }

	handleClick(){
		this.onClick.next();
	}

}
