import { Component, NgZone, OnDestroy, OnInit } from '@angular/core';
import { OrientationService } from '../orientation.service';
@Component({
  selector: 'app-video',
  templateUrl: './video.page.html',
  styleUrls: ['./video.page.scss'],
})
export class VideoPage implements OnInit, OnDestroy {

  constructor(
    private zone : NgZone,
    private oService : OrientationService,
  ) { }

  ngOnInit() {
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

  ngOnDestroy(){
    this.oService.lockToPortrait();
  }

  


}
