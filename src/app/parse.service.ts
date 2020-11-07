import { Injectable } from '@angular/core';
import Parse from 'parse';
import { BehaviorSubject, pipe } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';


@Injectable({
	providedIn: 'root'
})
export class ParseService {

	public config: ParseConfigLoader = new ParseConfigLoader();
	public fleet: ParseFleetLoader = new ParseFleetLoader();

	init() {
		Parse.serverURL = 'https://parseapi.back4app.com/';
		Parse.initialize("1HhKdcMa9ziwRn7UFtVOG0V4lMT9PNoMpwj1Tt9R", "mzkrcfpNFXWOwiTcNiwYMpvQCX8GdU0X8cIiCDEq");

		this.config.load();
		this.fleet.load();
	}


}



class ParseLoaderClass {

	public isLoading$: BehaviorSubject<any> = new BehaviorSubject(false);
	public data$: BehaviorSubject<any> = new BehaviorSubject(null);


	load(aggressive: boolean = false, bypassIsLoading: boolean = false) {

		if (this.isLoaded() == true)
			return;

		if (bypassIsLoading == true && bypassIsLoading == true)
			return;

		this.loadInternal().then((data) => {
			this.data$.next(data);
			this.isLoading$.next(false);
		}).catch((err) => {
			console.log(err);
		})

		if (aggressive) {
			setTimeout(() => {
				this.load(aggressive, true);
			}, 1000);
		} else {
			this.isLoading$.next(false);
		}


	}

	loadInternal(): Promise<any> { return; };

	isLoaded(): boolean {
		if (this.data$.getValue() === null) {
			return false;
		}
		return true;
	}

	isLoading(): boolean {
		return this.isLoading$.value == true;
	}

}


class ParseConfigLoader extends ParseLoaderClass {

	loadInternal() {
		return Parse.Config.get().then((val) => {
			return (val as any).attributes;
		});
	}

}


class ParseFleetLoader extends ParseLoaderClass {


	forBoatId(id) {
		return this.data$.pipe(map((boats) => {
			boats = boats && Array.isArray(boats) ? boats : [];
			let boat = null;
			boats.forEach((b)=>{
				if(b.objectId == id){
					boat = b;
				}
			})
			console.log(boat);
			return boat;
		}),pipe(shareReplay()));
	}

	loadInternal() {
		let query = new Parse.Query("Boat");
		query.equalTo('active', true);
		return query.find().then((boats: any) => {
			boats = boats.map(b => b.toJSON());
			return boats;
		});
	}

}
