import { Component, NgZone, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { take, takeUntil } from 'rxjs/operators';
import { OrientationService } from '../orientation.service';
import { ParseService } from '../parse.service';
import { Motion } from '@capacitor/motion';
import { NavController } from '@ionic/angular';
import { from, Subject, timer } from 'rxjs';
@Component({
  selector: 'app-video',
  templateUrl: './video.page.html',
  styleUrls: ['./video.page.scss'],
})
export class VideoPage implements OnInit, OnDestroy {
  public video: Observable<any> = new Observable();
  public videoJs: any;
  public stopChecking$: Subject<any> = new Subject();


  constructor(
    private activatedRoute: ActivatedRoute,
    private oService: OrientationService,
    private zone: NgZone,
    private navCtrl: NavController,
    public parseService: ParseService,
  ) {
    this.videoJs = (window as any).videojs;
    this.startCheckingForVideoElement();
  }

  ngOnInit(): void {

    this.activatedRoute.queryParams
      .pipe(take(1))
      .subscribe((data) => {
        let videoForReferenceId = data.forObjectId;
        this.parseService.vrVideo.load(true);
        console.log(videoForReferenceId);
        if (videoForReferenceId) {
          
          this.video = this.parseService.vrVideo.videoForReferenceId(videoForReferenceId);
        }

        this.parseService.vrVideo.load(true);
        this.oService.lockToLandscape();

      });
  }

  goBack() {
    if (this.videoJs) {
      this.videoJs('test').dispose();
    }
    this.navCtrl.back();
  }


  startCheckingForVideoElement() {
    from(timer(0, 2000)).pipe(takeUntil(this.stopChecking$))
      .subscribe(() => {
        let ele = document.getElementById('test');
        if (ele) {
          this.stopChecking$.next();
          this.setupVideo();
        }
      });
  }


  setupVideo() {
    this.zone.runOutsideAngular(() => {
      let player = this.videoJs('test');
      player.mediainfo = player.mediainfo || {};
      player.mediainfo.projection = '360';
      player.vr({ projection: 'AUTO', motionControls: true, debug: true, forceCardboard: false })
      player.play();
    });
  }


  enableDeviceMotion() {
    (DeviceMotionEvent as any).requestPermission().then(console.log).catch(console.log);
  }


  ngOnDestroy() {
    this.stopChecking$.next();
    this.oService.lockToPortrait()
  }

}
