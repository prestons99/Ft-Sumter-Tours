import { Component, NgZone, OnInit } from '@angular/core';
import { OrientationService } from '../orientation.service';

@Component({
  selector: 'app-tours3d',
  templateUrl: './tours3d.page.html',
  styleUrls: ['./tours3d.page.scss'],
})
export class Tours3dPage implements OnInit {

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