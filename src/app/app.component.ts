import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { ParseService } from './parse.service';
import { Plugins } from '@capacitor/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public appPages = [
    {
      title: 'Home',
      url: '/home',
    },
    {
      title: 'Welcome',
      url: '/welcome',
    },
    {
      title: 'Our Fleet',
      url: '/our-fleet',
    },
    {
      title: 'Fort Sumter',
      url: '/fort-sumter',
    },
    {
      title: 'Marine Life',
      url: '/marine-life',
    },
    {
      title: 'Routes',
      url: '/routes',
    },
    {
      title: "Time Machine",
      url: '/time-machine',
    },
    {
      title: "Share",
      isCustom: true,
    },
    {
      title: "Settings",
      url : '/settings',
    },
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private parseService: ParseService,
  ) {
    this.initializeApp();
    parseService.init();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  share(){
    Plugins.Share.share({
      text : "Check out this cool new app called Fort Sumter Tours! Available for download today! - http://www.fortsumtertours.com",
    });
  }

  ngOnInit() {
    const path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
  }
}
