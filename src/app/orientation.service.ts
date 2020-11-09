import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class OrientationService {

	constructor() { }


	getPlugin() : Promise<ScreenOrientation>{
		return new Promise((resolve, reject)=>{
			if(window && window.screen && window.screen.orientation){
				resolve(window.screen.orientation);
			}else{
				reject();
			}
		});
	}

	lockToPortrait(){
		this.getPlugin().then((plugin)=>{
			plugin.lock('portrait');
		}).catch(()=>{});
	}

	lockToLandscape(){
		this.getPlugin().then((plugin)=>{
			plugin.lock('landscape');
		}).catch(()=>{});
	}




}
