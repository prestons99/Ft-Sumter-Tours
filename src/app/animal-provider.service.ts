import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class AnimalProviderService {


	public isLoading$: BehaviorSubject<boolean> = new BehaviorSubject(false);
	public animals$: BehaviorSubject<Array<any>> = new BehaviorSubject([]);

	constructor(){ }


	public refresh() {

		let animals = this.animals$.value;
		if(animals.length > 0) return;


		this.isLoading$.next(true);
		setTimeout(() => {

			let animals = [{
				id: "1",
				name: "Barnacle",
				description: "<h1>Barnacle</h1>",
				image: "assets/icon/barnacle.jpg"
			}, {
				id: "2",
				name: "Bottlenose Dolphin",
				description: "<h1>Bottlenose Dolphin</h1>",
				image: "assets/icon/bottlenose_dolphin.jpg"
			}, {
				id: "3",
				name: "Brown Pelican",
				description: "<h1>Brown Pelican</h1>",
				image: "assets/icon/brown_pelican.jpg"
			}, {
				id: "4",
				name: "Cannonball Jellyfish",
				description: "<h1>Cannonball Jellyfish</h1>",
				image: "assets/icon/cannonball_jellyfish.jpg"
			}, {
				id: "6",
				name: "Horseshoe Crab",
				description: "<h1>Horseshoe Crab</h1>",
				image: "assets/icon/horseshoe_crab.jpg"
			}, {
				id: "7",
				name: "Laughing Gull",
				description: "<h1>Laughing Gull</h1>",
				image: "assets/icon/laughing_gull.jpg"
			}, {
				id: "8",
				name: "Loggerhead Sea Turtle",
				description: "<h1>Loggerhead Sea Turtle</h1>",
				image: "assets/icon/loggerhead_sea_turtle.jpg"
			}, {
				id: "10",
				name: "Manatee",
				description: "<h1>Manatee</h1>",
				image: "assets/icon/manatee.jpg"
			}, {
				id: "11",
				name: "Moon Jelly",
				description: "<h1>Moon Jelly</h1>",
				image: "assets/icon/Moon_jellyfish_at_Gota_Sagher.JPG"
			}, {
				id: "12",
				name: "North American River Otter",
				description: "<h1>North American River Otter</h1>",
				image: "assets/icon/river_otter.jpg"
			}, {
				id: "13",
				name: "Osprey",
				description: "<h1>Osprey</h1>",
				image: "assets/icon/osprey.jpg"
			}, {
				id: "14",
				name: "Oyster",
				description: "<h1>Oyster</h1>",
				image: "assets/icon/Oyster_reef_Hunting_Island_SC.jpg"
			}, {
				id: "15",
				name: "Red Drum",
				description: "<h1>Red Drum</h1>",
				image: "assets/icon/Red_Drum.jpg"
			}, {
				id: "16",
				name: "Sand Fiddler Crab",
				description: "<h1>Sand Fiddler Crab</h1>",
				image: "assets/icon/sand_fiddler_crab.jpg"
			}, {
				id: "17",
				name: "Snowy Egret",
				description: "<h1>Snowy Egret</h1>",
				image: "assets/icon/Snowy_Egret.jpg",
				content : `
				
				<table style="border: 1px solid #ccc; background-color: white; vertical-align: middle; width: 248px; margin:0.2em 0 0.2em 1em; float:right; clear:right;">



				<tbody><tr>
				<td style="border: 1px solid #dedede; padding: 3px">
				<link rel="mw-deduplicated-inline-style" href="mw-data:TemplateStyles:r935768785">
				<table class="clade" style="font-size:75%;line-height:80%">
				
				
				<tbody><tr>
				<td class="clade-label first"><b>Aves</b>
				</td>
				<td rowspan="2" class="clade-leaf">
				<link rel="mw-deduplicated-inline-style" href="mw-data:TemplateStyles:r935768785">
				<table class="clade">
				
				
				<tbody><tr>
				<td class="clade-label first"><a href="/wiki/Palaeognathae" title="Palaeognathae">Palaeognathae</a>
				</td>
				<td rowspan="2" class="clade-leaf">
				<link rel="mw-deduplicated-inline-style" href="mw-data:TemplateStyles:r935768785">
				<table class="clade">
				
				
				<tbody><tr>
				<td class="clade-label first"> 
				</td>
				<td rowspan="2" class="clade-leaf">
				<p><a href="/wiki/Struthioniformes" class="mw-redirect" title="Struthioniformes">Struthioniformes</a>
				</p>
				</td></tr>
				<tr>
				<td class="clade-slabel"> 
				</td></tr>
				<tr>
				<td class="clade-label"> 
				</td>
				<td rowspan="2" class="clade-leaf">
				<p><a href="/wiki/Tinamiformes" class="mw-redirect" title="Tinamiformes">Tinamiformes</a>
				</p>
				</td></tr>
				<tr>
				<td class="clade-slabel last"> 
				</td></tr></tbody></table>
				</td></tr>
				<tr>
				<td class="clade-slabel"> 
				</td></tr>
				<tr>
				<td class="clade-label"><a href="/wiki/Neognathae" title="Neognathae">Neognathae</a>
				</td>
				<td rowspan="2" class="clade-leaf">
				<link rel="mw-deduplicated-inline-style" href="mw-data:TemplateStyles:r935768785">
				<table class="clade">
				
				
				<tbody><tr>
				<td class="clade-label first"> 
				</td>
				<td rowspan="2" class="clade-leaf">
				<p>Other birds (<a href="/wiki/Neoaves" title="Neoaves">Neoaves</a>)
				</p>
				</td></tr>
				<tr>
				<td class="clade-slabel"> 
				</td></tr>
				<tr>
				<td class="clade-label"><a href="/wiki/Galloanserae" class="mw-redirect" title="Galloanserae">Galloanserae</a>
				</td>
				<td rowspan="2" class="clade-leaf">
				<link rel="mw-deduplicated-inline-style" href="mw-data:TemplateStyles:r935768785">
				<table class="clade">
				
				
				<tbody><tr>
				<td class="clade-label first"> 
				</td>
				<td rowspan="2" class="clade-leaf">
				<p><a href="/wiki/Anseriformes" title="Anseriformes">Anseriformes</a>
				</p>
				</td></tr>
				<tr>
				<td class="clade-slabel"> 
				</td></tr>
				<tr>
				<td class="clade-label"> 
				</td>
				<td rowspan="2" class="clade-leaf">
				<p><a href="/wiki/Galliformes" title="Galliformes">Galliformes</a>
				</p>
				</td></tr>
				<tr>
				<td class="clade-slabel last"> 
				</td></tr></tbody></table>
				</td></tr>
				<tr>
				<td class="clade-slabel last"> 
				</td></tr></tbody></table>
				</td></tr>
				<tr>
				<td class="clade-slabel last"> 
				</td></tr></tbody></table>
				</td></tr>
				<tr>
				<td class="clade-slabel last"> 
				</td></tr></tbody></table>
				</td></tr>
				
				
				<tr>
				<td style="text-align: left; font-size: 88%; border: 0; padding: 0;">Basal divergences of modern birds<br>based on <a href="/wiki/Sibley-Ahlquist_taxonomy" class="mw-redirect" title="Sibley-Ahlquist taxonomy">Sibley-Ahlquist taxonomy</a>
				</td></tr></tbody></table>
				
				
				
				
				
				`
			}
			];

			this.animals$.next(animals);
			this.isLoading$.next(false);

		}, 3000);
	}


	getAnimal(id) {
		let animals = this.animals$.value;
		let animal = null;
		animals.forEach((an) => {
			if (an.id == id) {
				animal = an;
			}
		})
		return animal;
	}




}
