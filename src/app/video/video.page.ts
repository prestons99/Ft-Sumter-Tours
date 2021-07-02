import { Component, NgZone, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { take } from 'rxjs/operators';
import { OrientationService } from '../orientation.service';
import { ParseService } from '../parse.service';
@Component({
  selector: 'app-video',
  templateUrl: './video.page.html',
  styleUrls: ['./video.page.scss'],
})
export class VideoPage implements OnInit, OnDestroy {
  public video : Observable<any> = new Observable();
  oService: any;
  zone: any;
  activatedRoute: any;

  constructor( 
    activatedRoute: ActivatedRoute,
		public parseService : ParseService,
  ){

    this.activatedRoute.queryParams
		.pipe(take(1))
		.subscribe((data) => {
			console.log("Take");
			let videoForReferenceId = data.video;
			this.parseService.animals.load(true);
			if(videoForReferenceId){
				this.video = this.parseService.vrVideo.forId(videoForReferenceId);
			}

    this.parseService.vrVideo.load(true);
    this.oService.lockToLandscape();
    this.zone.runOutsideAngular(function(){
      let videoJs = (window as any).videojs;
      let player = videoJs('test');
      player.mediainfo = player.mediainfo || {};
      player.mediainfo.projection = '360';
      player.vr({projection: 'AUTO', motionControls : true, debug: true, forceCardboard: false})
      player.play();
    });
    
    
    
  }
}

  ngOnDestroy(): void {
      throw new Error('Method not implemented.');
    }
    ngOnInit(): void {
      throw new Error('Method not implemented.');
  }
}
